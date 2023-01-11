package openapisdk.models.operations;



public class GetAddressResponse {
    public String contentType;
    public GetAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressResponse getAddressResponse;
    public GetAddressResponse withGetAddressResponse(openapisdk.models.shared.GetAddressResponse getAddressResponse) {
        this.getAddressResponse = getAddressResponse;
        return this;
    }
}