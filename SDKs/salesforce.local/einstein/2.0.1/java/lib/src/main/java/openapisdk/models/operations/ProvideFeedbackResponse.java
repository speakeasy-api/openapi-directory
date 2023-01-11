package openapisdk.models.operations;



public class ProvideFeedbackResponse {
    public String contentType;
    public ProvideFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example example;
    public ProvideFeedbackResponse withExample(openapisdk.models.shared.Example example) {
        this.example = example;
        return this;
    }
    public Long statusCode;
    public ProvideFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}