package openapisdk.models.operations;



public class ListFieldResponse {
    public String contentType;
    public ListFieldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFieldListFieldResponse listFieldResponse;
    public ListFieldResponse withListFieldResponse(ListFieldListFieldResponse listFieldResponse) {
        this.listFieldResponse = listFieldResponse;
        return this;
    }
    public Long statusCode;
    public ListFieldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}