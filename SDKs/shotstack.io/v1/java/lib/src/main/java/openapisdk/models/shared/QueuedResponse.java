package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * QueuedResponse
 * The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
**/
public class QueuedResponse {
    @JsonProperty("message")
    public String message;
    public QueuedResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("response")
    public QueuedResponseData response;
    public QueuedResponse withResponse(QueuedResponseData response) {
        this.response = response;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public QueuedResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}