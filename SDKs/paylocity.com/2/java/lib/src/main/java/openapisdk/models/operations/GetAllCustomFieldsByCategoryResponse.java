package openapisdk.models.operations;



public class GetAllCustomFieldsByCategoryResponse {
    public String contentType;
    public GetAllCustomFieldsByCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllCustomFieldsByCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CustomFieldDefinition[] customFieldDefinitions;
    public GetAllCustomFieldsByCategoryResponse withCustomFieldDefinitions(openapisdk.models.shared.CustomFieldDefinition[] customFieldDefinitions) {
        this.customFieldDefinitions = customFieldDefinitions;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllCustomFieldsByCategoryResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}