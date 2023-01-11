package openapisdk.models.operations;



public class GetAlbumCustomThumbsResponse {
    public String contentType;
    public GetAlbumCustomThumbsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumCustomThumbsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumCustomThumbsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetAlbumCustomThumbsResponse withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}