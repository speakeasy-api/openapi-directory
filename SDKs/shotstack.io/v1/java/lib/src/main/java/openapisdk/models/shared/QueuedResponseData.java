package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * QueuedResponseData
 * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
**/
public class QueuedResponseData {
    @JsonProperty("id")
    public String id;
    public QueuedResponseData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public QueuedResponseData withMessage(String message) {
        this.message = message;
        return this;
    }
}