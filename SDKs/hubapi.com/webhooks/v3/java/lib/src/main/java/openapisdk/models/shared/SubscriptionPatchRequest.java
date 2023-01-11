package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionPatchRequest
 * Updated details for the subscription.
**/
public class SubscriptionPatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public SubscriptionPatchRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
}