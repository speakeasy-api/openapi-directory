package openapisdk.models.operations;



public class GetResourcesMediaIdRelatedMediaFormatResponse {
    public String contentType;
    public GetResourcesMediaIdRelatedMediaFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds;
    public GetResourcesMediaIdRelatedMediaFormatResponse withMediaItemWrappeds(openapisdk.models.shared.MediaItemWrapped[] mediaItemWrappeds) {
        this.mediaItemWrappeds = mediaItemWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaIdRelatedMediaFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}