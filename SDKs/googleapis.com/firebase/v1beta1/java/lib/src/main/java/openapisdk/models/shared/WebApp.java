package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebApp
 * Details of a Firebase App for the web.
**/
public class WebApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyId")
    public String apiKeyId;
    public WebApp withApiKeyId(String apiKeyId) {
        this.apiKeyId = apiKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public WebApp withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appUrls")
    public String[] appUrls;
    public WebApp withAppUrls(String[] appUrls) {
        this.appUrls = appUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public WebApp withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public WebApp withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public WebAppStateEnum state;
    public WebApp withState(WebAppStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webId")
    public String webId;
    public WebApp withWebId(String webId) {
        this.webId = webId;
        return this;
    }
}