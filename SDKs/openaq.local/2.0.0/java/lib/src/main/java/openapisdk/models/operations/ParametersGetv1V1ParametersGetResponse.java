package openapisdk.models.operations;



public class ParametersGetv1V1ParametersGetResponse {
    public String contentType;
    public ParametersGetv1V1ParametersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ParametersGetv1V1ParametersGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqParametersResult openAQParametersResult;
    public ParametersGetv1V1ParametersGetResponse withOpenAqParametersResult(openapisdk.models.shared.OpenAqParametersResult openAQParametersResult) {
        this.openAQParametersResult = openAQParametersResult;
        return this;
    }
    public Long statusCode;
    public ParametersGetv1V1ParametersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}