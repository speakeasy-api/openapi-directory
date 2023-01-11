package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreReceiveHookScriptRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public PreReceiveHookScriptRepository withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public PreReceiveHookScriptRepository withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PreReceiveHookScriptRepository withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreReceiveHookScriptRepository withUrl(String url) {
        this.url = url;
        return this;
    }
}