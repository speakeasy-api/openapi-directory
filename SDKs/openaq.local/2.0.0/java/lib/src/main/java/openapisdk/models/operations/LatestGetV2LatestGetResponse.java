package openapisdk.models.operations;



public class LatestGetV2LatestGetResponse {
    public String contentType;
    public LatestGetV2LatestGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public LatestGetV2LatestGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public LatestGetV2LatestGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public LatestGetV2LatestGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}