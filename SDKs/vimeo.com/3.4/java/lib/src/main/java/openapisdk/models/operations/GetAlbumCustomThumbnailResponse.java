package openapisdk.models.operations;



public class GetAlbumCustomThumbnailResponse {
    public String contentType;
    public GetAlbumCustomThumbnailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumCustomThumbnailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumCustomThumbnailResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public GetAlbumCustomThumbnailResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}