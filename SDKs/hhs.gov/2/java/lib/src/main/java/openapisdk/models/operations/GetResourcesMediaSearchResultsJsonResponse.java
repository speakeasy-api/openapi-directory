package openapisdk.models.operations;



public class GetResourcesMediaSearchResultsJsonResponse {
    public String contentType;
    public GetResourcesMediaSearchResultsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds;
    public GetResourcesMediaSearchResultsJsonResponse withMediaItemWrappeds(openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds) {
        this.mediaItemWrappeds = mediaItemWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaSearchResultsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}