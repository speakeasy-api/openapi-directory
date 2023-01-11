package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RenderResponse
 * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
**/
public class RenderResponse {
    @JsonProperty("message")
    public String message;
    public RenderResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("response")
    public RenderResponseData response;
    public RenderResponse withResponse(RenderResponseData response) {
        this.response = response;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public RenderResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}