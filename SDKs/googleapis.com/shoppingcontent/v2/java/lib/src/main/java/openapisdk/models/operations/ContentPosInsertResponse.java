package openapisdk.models.operations;



public class ContentPosInsertResponse {
    public String contentType;
    public ContentPosInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosStore posStore;
    public ContentPosInsertResponse withPosStore(openapisdk.models.shared.PosStore posStore) {
        this.posStore = posStore;
        return this;
    }
    public Long statusCode;
    public ContentPosInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}