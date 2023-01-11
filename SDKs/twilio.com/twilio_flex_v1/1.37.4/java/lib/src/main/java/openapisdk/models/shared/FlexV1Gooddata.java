package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FlexV1Gooddata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gd_base_url")
    public String gdBaseUrl;
    public FlexV1Gooddata withGdBaseUrl(String gdBaseUrl) {
        this.gdBaseUrl = gdBaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_expiry")
    public String sessionExpiry;
    public FlexV1Gooddata withSessionExpiry(String sessionExpiry) {
        this.sessionExpiry = sessionExpiry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_id")
    public String sessionId;
    public FlexV1Gooddata withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FlexV1Gooddata withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_id")
    public String workspaceId;
    public FlexV1Gooddata withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}