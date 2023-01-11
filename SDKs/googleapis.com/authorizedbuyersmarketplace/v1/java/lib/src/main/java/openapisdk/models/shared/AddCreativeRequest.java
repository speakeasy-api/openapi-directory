package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddCreativeRequest
 * Request message for adding creative to be used in the bidding process for the finalized deal.
**/
public class AddCreativeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creative")
    public String creative;
    public AddCreativeRequest withCreative(String creative) {
        this.creative = creative;
        return this;
    }
}