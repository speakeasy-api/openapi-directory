package openapisdk.models.operations;



public class ListSinkResponse {
    public String contentType;
    public ListSinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSinkListSinkResponse listSinkResponse;
    public ListSinkResponse withListSinkResponse(ListSinkListSinkResponse listSinkResponse) {
        this.listSinkResponse = listSinkResponse;
        return this;
    }
    public Long statusCode;
    public ListSinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}