package openapisdk.models.operations;



public class LatestV1GetV1LatestLocationIdGetResponse {
    public String contentType;
    public LatestV1GetV1LatestLocationIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public LatestV1GetV1LatestLocationIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public LatestV1GetV1LatestLocationIdGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public LatestV1GetV1LatestLocationIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}