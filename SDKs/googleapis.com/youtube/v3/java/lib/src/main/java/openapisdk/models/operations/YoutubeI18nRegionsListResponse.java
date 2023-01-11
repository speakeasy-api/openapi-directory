package openapisdk.models.operations;



public class YoutubeI18nRegionsListResponse {
    public String contentType;
    public YoutubeI18nRegionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.I18nRegionListResponse i18nRegionListResponse;
    public YoutubeI18nRegionsListResponse withI18nRegionListResponse(openapisdk.models.shared.I18nRegionListResponse i18nRegionListResponse) {
        this.i18nRegionListResponse = i18nRegionListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeI18nRegionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}