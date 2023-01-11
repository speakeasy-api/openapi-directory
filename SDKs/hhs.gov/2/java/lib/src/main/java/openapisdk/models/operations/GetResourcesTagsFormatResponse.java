package openapisdk.models.operations;



public class GetResourcesTagsFormatResponse {
    public String contentType;
    public GetResourcesTagsFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesTagsFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds;
    public GetResourcesTagsFormatResponse withTagMarshallerWrappeds(openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds) {
        this.tagMarshallerWrappeds = tagMarshallerWrappeds;
        return this;
    }
}