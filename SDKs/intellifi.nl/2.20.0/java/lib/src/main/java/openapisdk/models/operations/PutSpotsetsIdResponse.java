package openapisdk.models.operations;



public class PutSpotsetsIdResponse {
    public String contentType;
    public PutSpotsetsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseDefaultResource responseDefaultResource;
    public PutSpotsetsIdResponse withResponseDefaultResource(openapisdk.models.shared.ResponseDefaultResource responseDefaultResource) {
        this.responseDefaultResource = responseDefaultResource;
        return this;
    }
    public Long statusCode;
    public PutSpotsetsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}