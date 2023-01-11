package openapisdk.models.operations;



public class MybusinessAccountsLocationsMediaStartUploadResponse {
    public String contentType;
    public MybusinessAccountsLocationsMediaStartUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemDataRef mediaItemDataRef;
    public MybusinessAccountsLocationsMediaStartUploadResponse withMediaItemDataRef(openapisdk.models.shared.MediaItemDataRef mediaItemDataRef) {
        this.mediaItemDataRef = mediaItemDataRef;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsMediaStartUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}