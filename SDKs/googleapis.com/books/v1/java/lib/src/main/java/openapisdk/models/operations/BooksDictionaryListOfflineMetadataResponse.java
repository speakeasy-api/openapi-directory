package openapisdk.models.operations;



public class BooksDictionaryListOfflineMetadataResponse {
    public String contentType;
    public BooksDictionaryListOfflineMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Metadata metadata;
    public BooksDictionaryListOfflineMetadataResponse withMetadata(openapisdk.models.shared.Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    public Long statusCode;
    public BooksDictionaryListOfflineMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}