package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VenueBoxOfficeInfo
 * Venue box office information
**/
public class VenueBoxOfficeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptedPaymentDetails")
    public java.util.Map<String, String> acceptedPaymentDetails;
    public VenueBoxOfficeInfo withAcceptedPaymentDetails(java.util.Map<String, String> acceptedPaymentDetails) {
        this.acceptedPaymentDetails = acceptedPaymentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openHoursDetails")
    public java.util.Map<String, String> openHoursDetails;
    public VenueBoxOfficeInfo withOpenHoursDetails(java.util.Map<String, String> openHoursDetails) {
        this.openHoursDetails = openHoursDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumberDetails")
    public java.util.Map<String, String> phoneNumberDetails;
    public VenueBoxOfficeInfo withPhoneNumberDetails(java.util.Map<String, String> phoneNumberDetails) {
        this.phoneNumberDetails = phoneNumberDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("willCallDetails")
    public java.util.Map<String, String> willCallDetails;
    public VenueBoxOfficeInfo withWillCallDetails(java.util.Map<String, String> willCallDetails) {
        this.willCallDetails = willCallDetails;
        return this;
    }
}