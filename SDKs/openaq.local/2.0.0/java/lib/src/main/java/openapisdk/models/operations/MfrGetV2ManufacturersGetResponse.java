package openapisdk.models.operations;



public class MfrGetV2ManufacturersGetResponse {
    public String contentType;
    public MfrGetV2ManufacturersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public MfrGetV2ManufacturersGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public MfrGetV2ManufacturersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}