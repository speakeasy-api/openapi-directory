package openapisdk.models.operations;



public class GetResourcesTagsIdRelatedFormatResponse {
    public String contentType;
    public GetResourcesTagsIdRelatedFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesTagsIdRelatedFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds;
    public GetResourcesTagsIdRelatedFormatResponse withTagMarshallerWrappeds(openapisdk.models.shared.TagMarshallerWrapped[] tagMarshallerWrappeds) {
        this.tagMarshallerWrappeds = tagMarshallerWrappeds;
        return this;
    }
}