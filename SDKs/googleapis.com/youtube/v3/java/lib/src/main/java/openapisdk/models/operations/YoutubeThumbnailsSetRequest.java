package openapisdk.models.operations;



public class YoutubeThumbnailsSetRequest {
    public YoutubeThumbnailsSetQueryParams queryParams;
    public YoutubeThumbnailsSetRequest withQueryParams(YoutubeThumbnailsSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubeThumbnailsSetSecurity security;
    public YoutubeThumbnailsSetRequest withSecurity(YoutubeThumbnailsSetSecurity security) {
        this.security = security;
        return this;
    }
}