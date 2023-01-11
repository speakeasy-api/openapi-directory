package openapisdk.models.operations;



public class DeleteKvPairResponse {
    public String contentType;
    public DeleteKvPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public DeleteKvPairResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public DeleteKvPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}