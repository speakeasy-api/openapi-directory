package openapisdk.models.operations;



public class ListFaxMediaResponse {
    public String contentType;
    public ListFaxMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFaxMediaListFaxMediaResponse listFaxMediaResponse;
    public ListFaxMediaResponse withListFaxMediaResponse(ListFaxMediaListFaxMediaResponse listFaxMediaResponse) {
        this.listFaxMediaResponse = listFaxMediaResponse;
        return this;
    }
    public Long statusCode;
    public ListFaxMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}