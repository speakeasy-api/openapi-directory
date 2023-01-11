package openapisdk.models.operations;



public class ListFaxResponse {
    public String contentType;
    public ListFaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFaxListFaxResponse listFaxResponse;
    public ListFaxResponse withListFaxResponse(ListFaxListFaxResponse listFaxResponse) {
        this.listFaxResponse = listFaxResponse;
        return this;
    }
    public Long statusCode;
    public ListFaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}