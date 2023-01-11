package openapisdk.models.operations;



public class AddExampleResponse {
    public String contentType;
    public AddExampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example example;
    public AddExampleResponse withExample(openapisdk.models.shared.Example example) {
        this.example = example;
        return this;
    }
    public Long statusCode;
    public AddExampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}