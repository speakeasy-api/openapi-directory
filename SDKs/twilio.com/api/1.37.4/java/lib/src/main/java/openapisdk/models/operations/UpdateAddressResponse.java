package openapisdk.models.operations;



public class UpdateAddressResponse {
    public String contentType;
    public UpdateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress;
    public UpdateAddressResponse withApiV2010AccountAddress(openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress) {
        this.apiV2010AccountAddress = apiV2010AccountAddress;
        return this;
    }
}