package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionHelpResponse {
    @JsonProperty("api")
    public String api;
    public ActionHelpResponse withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public ActionHelpResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("response")
    public ActionHelp response;
    public ActionHelpResponse withResponse(ActionHelp response) {
        this.response = response;
        return this;
    }
    @JsonProperty("status")
    public ActionHelpResponseStatusEnum status;
    public ActionHelpResponse withStatus(ActionHelpResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}