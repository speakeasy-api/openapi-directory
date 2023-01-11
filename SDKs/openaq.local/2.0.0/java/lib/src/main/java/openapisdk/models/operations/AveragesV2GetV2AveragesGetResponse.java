package openapisdk.models.operations;



public class AveragesV2GetV2AveragesGetResponse {
    public String contentType;
    public AveragesV2GetV2AveragesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public AveragesV2GetV2AveragesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public AveragesV2GetV2AveragesGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public AveragesV2GetV2AveragesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}