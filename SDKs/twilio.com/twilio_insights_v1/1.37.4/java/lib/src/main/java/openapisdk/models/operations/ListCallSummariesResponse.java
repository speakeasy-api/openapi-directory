package openapisdk.models.operations;



public class ListCallSummariesResponse {
    public String contentType;
    public ListCallSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCallSummariesListCallSummariesResponse listCallSummariesResponse;
    public ListCallSummariesResponse withListCallSummariesResponse(ListCallSummariesListCallSummariesResponse listCallSummariesResponse) {
        this.listCallSummariesResponse = listCallSummariesResponse;
        return this;
    }
    public Long statusCode;
    public ListCallSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}