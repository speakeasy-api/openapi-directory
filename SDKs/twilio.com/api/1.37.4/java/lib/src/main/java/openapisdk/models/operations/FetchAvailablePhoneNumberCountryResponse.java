package openapisdk.models.operations;



public class FetchAvailablePhoneNumberCountryResponse {
    public String contentType;
    public FetchAvailablePhoneNumberCountryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAvailablePhoneNumberCountryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountry apiV2010AccountAvailablePhoneNumberCountry;
    public FetchAvailablePhoneNumberCountryResponse withApiV2010AccountAvailablePhoneNumberCountry(openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountry apiV2010AccountAvailablePhoneNumberCountry) {
        this.apiV2010AccountAvailablePhoneNumberCountry = apiV2010AccountAvailablePhoneNumberCountry;
        return this;
    }
}