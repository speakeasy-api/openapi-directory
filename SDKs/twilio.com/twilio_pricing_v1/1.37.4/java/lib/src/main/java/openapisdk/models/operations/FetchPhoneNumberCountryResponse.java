package openapisdk.models.operations;



public class FetchPhoneNumberCountryResponse {
    public String contentType;
    public FetchPhoneNumberCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPhoneNumberCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PricingV1PhoneNumberPhoneNumberCountryInstance pricingV1PhoneNumberPhoneNumberCountryInstance;
    public FetchPhoneNumberCountryResponse withPricingV1PhoneNumberPhoneNumberCountryInstance(openapisdk.models.shared.PricingV1PhoneNumberPhoneNumberCountryInstance pricingV1PhoneNumberPhoneNumberCountryInstance) {
        this.pricingV1PhoneNumberPhoneNumberCountryInstance = pricingV1PhoneNumberPhoneNumberCountryInstance;
        return this;
    }
}