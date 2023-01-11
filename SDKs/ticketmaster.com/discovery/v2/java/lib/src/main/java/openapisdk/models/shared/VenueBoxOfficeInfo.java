package openapisdk.models.shared;



/**
 * VenueBoxOfficeInfo
 * Venue box office information
**/
public class VenueBoxOfficeInfo {
    public String acceptedPaymentDetail;
    public VenueBoxOfficeInfo withAcceptedPaymentDetail(String acceptedPaymentDetail) {
        this.acceptedPaymentDetail = acceptedPaymentDetail;
        return this;
    }
    public String openHoursDetail;
    public VenueBoxOfficeInfo withOpenHoursDetail(String openHoursDetail) {
        this.openHoursDetail = openHoursDetail;
        return this;
    }
    public String phoneNumberDetail;
    public VenueBoxOfficeInfo withPhoneNumberDetail(String phoneNumberDetail) {
        this.phoneNumberDetail = phoneNumberDetail;
        return this;
    }
    public String willCallDetail;
    public VenueBoxOfficeInfo withWillCallDetail(String willCallDetail) {
        this.willCallDetail = willCallDetail;
        return this;
    }
}