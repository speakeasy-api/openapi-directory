package openapisdk.models.operations;



public class GetExamples1Response {
    public String contentType;
    public GetExamples1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExampleList exampleList;
    public GetExamples1Response withExampleList(openapisdk.models.shared.ExampleList exampleList) {
        this.exampleList = exampleList;
        return this;
    }
    public Long statusCode;
    public GetExamples1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}