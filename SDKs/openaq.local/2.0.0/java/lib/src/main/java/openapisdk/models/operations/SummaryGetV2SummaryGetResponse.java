package openapisdk.models.operations;



public class SummaryGetV2SummaryGetResponse {
    public String contentType;
    public SummaryGetV2SummaryGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public SummaryGetV2SummaryGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public SummaryGetV2SummaryGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}