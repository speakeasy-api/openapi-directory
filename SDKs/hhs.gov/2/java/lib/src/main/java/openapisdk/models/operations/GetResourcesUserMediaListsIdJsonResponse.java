package openapisdk.models.operations;



public class GetResourcesUserMediaListsIdJsonResponse {
    public String contentType;
    public GetResourcesUserMediaListsIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds;
    public GetResourcesUserMediaListsIdJsonResponse withMediaItemWrappeds(openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds) {
        this.mediaItemWrappeds = mediaItemWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesUserMediaListsIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}