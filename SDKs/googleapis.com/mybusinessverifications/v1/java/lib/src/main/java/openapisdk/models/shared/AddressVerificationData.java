package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddressVerificationData
 * Display data for verifications through postcard.
**/
public class AddressVerificationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PostalAddress address;
    public AddressVerificationData withAddress(PostalAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business")
    public String business;
    public AddressVerificationData withBusiness(String business) {
        this.business = business;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedDeliveryDaysRegion")
    public Integer expectedDeliveryDaysRegion;
    public AddressVerificationData withExpectedDeliveryDaysRegion(Integer expectedDeliveryDaysRegion) {
        this.expectedDeliveryDaysRegion = expectedDeliveryDaysRegion;
        return this;
    }
}