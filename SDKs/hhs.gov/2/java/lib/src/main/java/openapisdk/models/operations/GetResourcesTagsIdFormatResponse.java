package openapisdk.models.operations;



public class GetResourcesTagsIdFormatResponse {
    public String contentType;
    public GetResourcesTagsIdFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesTagsIdFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds;
    public GetResourcesTagsIdFormatResponse withTagMarshallerWrappeds(openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds) {
        this.tagMarshallerWrappeds = tagMarshallerWrappeds;
        return this;
    }
}