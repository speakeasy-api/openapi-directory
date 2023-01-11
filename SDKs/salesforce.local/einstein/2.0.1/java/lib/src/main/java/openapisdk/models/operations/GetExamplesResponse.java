package openapisdk.models.operations;



public class GetExamplesResponse {
    public String contentType;
    public GetExamplesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExampleList exampleList;
    public GetExamplesResponse withExampleList(openapisdk.models.shared.ExampleList exampleList) {
        this.exampleList = exampleList;
        return this;
    }
    public Long statusCode;
    public GetExamplesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}