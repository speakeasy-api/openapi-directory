package openapisdk.models.operations;



public class FetchPhoneNumberResponse {
    public String contentType;
    public FetchPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RoutesV2PhoneNumber routesV2PhoneNumber;
    public FetchPhoneNumberResponse withRoutesV2PhoneNumber(openapisdk.models.shared.RoutesV2PhoneNumber routesV2PhoneNumber) {
        this.routesV2PhoneNumber = routesV2PhoneNumber;
        return this;
    }
}