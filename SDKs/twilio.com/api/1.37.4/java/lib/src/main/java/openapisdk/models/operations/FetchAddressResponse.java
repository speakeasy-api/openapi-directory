package openapisdk.models.operations;



public class FetchAddressResponse {
    public String contentType;
    public FetchAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress;
    public FetchAddressResponse withApiV2010AccountAddress(openapisdk.models.shared.ApiV2010AccountAddress apiV2010AccountAddress) {
        this.apiV2010AccountAddress = apiV2010AccountAddress;
        return this;
    }
}