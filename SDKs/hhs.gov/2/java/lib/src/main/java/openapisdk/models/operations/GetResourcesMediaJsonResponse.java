package openapisdk.models.operations;



public class GetResourcesMediaJsonResponse {
    public String contentType;
    public GetResourcesMediaJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds;
    public GetResourcesMediaJsonResponse withMediaItemWrappeds(openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds) {
        this.mediaItemWrappeds = mediaItemWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}