package openapisdk.models.operations;



public class ListCallResponse {
    public String contentType;
    public ListCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCallListCallResponse listCallResponse;
    public ListCallResponse withListCallResponse(ListCallListCallResponse listCallResponse) {
        this.listCallResponse = listCallResponse;
        return this;
    }
    public Long statusCode;
    public ListCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}