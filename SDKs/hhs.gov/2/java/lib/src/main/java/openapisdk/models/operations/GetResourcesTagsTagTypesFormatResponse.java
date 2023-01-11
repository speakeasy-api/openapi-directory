package openapisdk.models.operations;



public class GetResourcesTagsTagTypesFormatResponse {
    public String contentType;
    public GetResourcesTagsTagTypesFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesTagsTagTypesFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagTypeMarshallerWrapped[] tagTypeMarshallerWrappeds;
    public GetResourcesTagsTagTypesFormatResponse withTagTypeMarshallerWrappeds(openapisdk.models.shared.TagTypeMarshallerWrapped[] tagTypeMarshallerWrappeds) {
        this.tagTypeMarshallerWrappeds = tagTypeMarshallerWrappeds;
        return this;
    }
}