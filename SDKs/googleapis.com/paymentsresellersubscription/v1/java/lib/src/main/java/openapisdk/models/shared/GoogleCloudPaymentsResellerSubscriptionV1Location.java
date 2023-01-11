package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Location
 * Describes a location of an end user.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public GoogleCloudPaymentsResellerSubscriptionV1Location withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GoogleCloudPaymentsResellerSubscriptionV1Location withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}