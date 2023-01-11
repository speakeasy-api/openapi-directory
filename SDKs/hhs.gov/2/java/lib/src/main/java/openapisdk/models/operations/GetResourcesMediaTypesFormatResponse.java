package openapisdk.models.operations;



public class GetResourcesMediaTypesFormatResponse {
    public String contentType;
    public GetResourcesMediaTypesFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MediaTypeHolderWrapped[] mediaTypeHolderWrappeds;
    public GetResourcesMediaTypesFormatResponse withMediaTypeHolderWrappeds(openapisdk.models.shared.MediaTypeHolderWrapped[] mediaTypeHolderWrappeds) {
        this.mediaTypeHolderWrappeds = mediaTypeHolderWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesMediaTypesFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}