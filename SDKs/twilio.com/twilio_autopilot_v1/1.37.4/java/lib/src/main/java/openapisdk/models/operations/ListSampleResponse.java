package openapisdk.models.operations;



public class ListSampleResponse {
    public String contentType;
    public ListSampleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSampleListSampleResponse listSampleResponse;
    public ListSampleResponse withListSampleResponse(ListSampleListSampleResponse listSampleResponse) {
        this.listSampleResponse = listSampleResponse;
        return this;
    }
    public Long statusCode;
    public ListSampleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}