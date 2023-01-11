package openapisdk.models.operations;



public class ContentPosListResponse {
    public String contentType;
    public ContentPosListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosListResponse posListResponse;
    public ContentPosListResponse withPosListResponse(openapisdk.models.shared.PosListResponse posListResponse) {
        this.posListResponse = posListResponse;
        return this;
    }
    public Long statusCode;
    public ContentPosListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}