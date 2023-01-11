package openapisdk.models.operations;



public class UpdateKvPairResponse {
    public String contentType;
    public UpdateKvPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public UpdateKvPairResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public UpdateKvPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}