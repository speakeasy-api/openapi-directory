package openapisdk.models.operations;



public class GetAlbumVideoAlt1Response {
    public String contentType;
    public GetAlbumVideoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAlbumVideoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetAlbumVideoAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public GetAlbumVideoAlt1Response withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}