package openapisdk.models.operations;



public class FetchMediaResponse {
    public String contentType;
    public FetchMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountMessageMedia apiV2010AccountMessageMedia;
    public FetchMediaResponse withApiV2010AccountMessageMedia(openapisdk.models.shared.ApiV2010AccountMessageMedia apiV2010AccountMessageMedia) {
        this.apiV2010AccountMessageMedia = apiV2010AccountMessageMedia;
        return this;
    }
}