package openapisdk.models.operations;



public class ListFieldTypeResponse {
    public String contentType;
    public ListFieldTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFieldTypeListFieldTypeResponse listFieldTypeResponse;
    public ListFieldTypeResponse withListFieldTypeResponse(ListFieldTypeListFieldTypeResponse listFieldTypeResponse) {
        this.listFieldTypeResponse = listFieldTypeResponse;
        return this;
    }
    public Long statusCode;
    public ListFieldTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}