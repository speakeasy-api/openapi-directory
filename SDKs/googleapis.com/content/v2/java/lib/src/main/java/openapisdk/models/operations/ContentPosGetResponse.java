package openapisdk.models.operations;



public class ContentPosGetResponse {
    public String contentType;
    public ContentPosGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosStore posStore;
    public ContentPosGetResponse withPosStore(openapisdk.models.shared.PosStore posStore) {
        this.posStore = posStore;
        return this;
    }
    public Long statusCode;
    public ContentPosGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}