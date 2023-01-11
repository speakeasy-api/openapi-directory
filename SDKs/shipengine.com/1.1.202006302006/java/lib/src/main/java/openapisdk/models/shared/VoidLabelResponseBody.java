package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VoidLabelResponseBody
 * A void label response body
**/
public class VoidLabelResponseBody {
    @JsonProperty("approved")
    public Boolean approved;
    public VoidLabelResponseBody withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public VoidLabelResponseBody withMessage(String message) {
        this.message = message;
        return this;
    }
}