package openapisdk.models.operations;



public class UpdatePhoneNumberResponse {
    public String contentType;
    public UpdatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RoutesV2PhoneNumber routesV2PhoneNumber;
    public UpdatePhoneNumberResponse withRoutesV2PhoneNumber(openapisdk.models.shared.RoutesV2PhoneNumber routesV2PhoneNumber) {
        this.routesV2PhoneNumber = routesV2PhoneNumber;
        return this;
    }
}