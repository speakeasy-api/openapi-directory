package openapisdk.models.operations;



public class ListDataSessionResponse {
    public String contentType;
    public ListDataSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListDataSessionListDataSessionResponse listDataSessionResponse;
    public ListDataSessionResponse withListDataSessionResponse(ListDataSessionListDataSessionResponse listDataSessionResponse) {
        this.listDataSessionResponse = listDataSessionResponse;
        return this;
    }
    public Long statusCode;
    public ListDataSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}