package openapisdk.models.operations;



public class CreateAddressResponse {
    public String contentType;
    public CreateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress;
    public CreateAddressResponse withApiV2010AccountAddress(openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress) {
        this.apiV2010AccountAddress = apiV2010AccountAddress;
        return this;
    }
}