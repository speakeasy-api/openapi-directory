package openapisdk.models.operations;



public class ProvideFeedback1Response {
    public String contentType;
    public ProvideFeedback1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example example;
    public ProvideFeedback1Response withExample(openapisdk.models.shared.Example example) {
        this.example = example;
        return this;
    }
    public Long statusCode;
    public ProvideFeedback1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}