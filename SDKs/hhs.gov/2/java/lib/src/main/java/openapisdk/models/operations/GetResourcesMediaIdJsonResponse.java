package openapisdk.models.operations;



public class GetResourcesMediaIdJsonResponse {
    public String contentType;
    public GetResourcesMediaIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds;
    public GetResourcesMediaIdJsonResponse withMediaItemWrappeds(openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds) {
        this.mediaItemWrappeds = mediaItemWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}