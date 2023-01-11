package openapisdk.models.operations;



public class ModelGetV2ModelsGetResponse {
    public String contentType;
    public ModelGetV2ModelsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public ModelGetV2ModelsGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public ModelGetV2ModelsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}