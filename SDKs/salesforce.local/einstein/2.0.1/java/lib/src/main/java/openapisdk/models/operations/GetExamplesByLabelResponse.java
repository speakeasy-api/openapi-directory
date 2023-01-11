package openapisdk.models.operations;



public class GetExamplesByLabelResponse {
    public String contentType;
    public GetExamplesByLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExampleList exampleList;
    public GetExamplesByLabelResponse withExampleList(openapisdk.models.shared.ExampleList exampleList) {
        this.exampleList = exampleList;
        return this;
    }
    public Long statusCode;
    public GetExamplesByLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}