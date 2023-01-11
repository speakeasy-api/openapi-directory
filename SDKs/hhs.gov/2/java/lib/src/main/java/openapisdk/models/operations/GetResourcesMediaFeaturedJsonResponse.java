package openapisdk.models.operations;



public class GetResourcesMediaFeaturedJsonResponse {
    public String contentType;
    public GetResourcesMediaFeaturedJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItem[] mediaItems;
    public GetResourcesMediaFeaturedJsonResponse withMediaItems(openapisdk.models.shared.MediaItem[] mediaItems) {
        this.mediaItems = mediaItems;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaFeaturedJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}