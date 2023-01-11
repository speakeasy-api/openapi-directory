package openapisdk.models.operations;



public class GetVodPostersResponse {
    public String contentType;
    public GetVodPostersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodPostersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodPostersResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture[] pictures;
    public GetVodPostersResponse withPictures(openapisdk.models.shared.Picture[] pictures) {
        this.pictures = pictures;
        return this;
    }
}