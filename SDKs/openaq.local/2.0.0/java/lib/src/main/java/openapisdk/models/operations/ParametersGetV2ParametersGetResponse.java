package openapisdk.models.operations;



public class ParametersGetV2ParametersGetResponse {
    public String contentType;
    public ParametersGetV2ParametersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ParametersGetV2ParametersGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqParametersResult openAQParametersResult;
    public ParametersGetV2ParametersGetResponse withOpenAqParametersResult(openapisdk.models.shared.OpenAqParametersResult openAQParametersResult) {
        this.openAQParametersResult = openAQParametersResult;
        return this;
    }
    public Long statusCode;
    public ParametersGetV2ParametersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}