package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Constraints
 * Represents the constraints for buying the Offer.
**/
public class GoogleCloudChannelV1Constraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerConstraints")
    public GoogleCloudChannelV1CustomerConstraints customerConstraints;
    public GoogleCloudChannelV1Constraints withCustomerConstraints(GoogleCloudChannelV1CustomerConstraints customerConstraints) {
        this.customerConstraints = customerConstraints;
        return this;
    }
}