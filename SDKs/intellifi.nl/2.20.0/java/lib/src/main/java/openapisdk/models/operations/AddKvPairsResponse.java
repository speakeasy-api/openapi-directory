package openapisdk.models.operations;



public class AddKvPairsResponse {
    public String contentType;
    public AddKvPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public AddKvPairsResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public AddKvPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}