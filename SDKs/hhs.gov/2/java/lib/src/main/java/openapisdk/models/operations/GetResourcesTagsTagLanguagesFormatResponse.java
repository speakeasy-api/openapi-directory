package openapisdk.models.operations;



public class GetResourcesTagsTagLanguagesFormatResponse {
    public String contentType;
    public GetResourcesTagsTagLanguagesFormatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesTagsTagLanguagesFormatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagLanguageMarshallerWrapped[] tagLanguageMarshallerWrappeds;
    public GetResourcesTagsTagLanguagesFormatResponse withTagLanguageMarshallerWrappeds(openapisdk.models.shared.TagLanguageMarshallerWrapped[] tagLanguageMarshallerWrappeds) {
        this.tagLanguageMarshallerWrappeds = tagLanguageMarshallerWrappeds;
        return this;
    }
}