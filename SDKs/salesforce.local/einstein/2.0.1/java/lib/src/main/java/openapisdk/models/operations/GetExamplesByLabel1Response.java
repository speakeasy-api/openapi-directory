package openapisdk.models.operations;



public class GetExamplesByLabel1Response {
    public String contentType;
    public GetExamplesByLabel1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExampleList exampleList;
    public GetExamplesByLabel1Response withExampleList(openapisdk.models.shared.ExampleList exampleList) {
        this.exampleList = exampleList;
        return this;
    }
    public Long statusCode;
    public GetExamplesByLabel1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}