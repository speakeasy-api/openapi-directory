package openapisdk.models.operations;



public class LatestV1GetV1LatestGetResponse {
    public String contentType;
    public LatestV1GetV1LatestGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public LatestV1GetV1LatestGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public LatestV1GetV1LatestGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public LatestV1GetV1LatestGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}