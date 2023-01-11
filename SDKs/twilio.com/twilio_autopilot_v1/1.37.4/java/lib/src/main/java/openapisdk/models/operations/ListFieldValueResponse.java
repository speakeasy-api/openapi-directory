package openapisdk.models.operations;



public class ListFieldValueResponse {
    public String contentType;
    public ListFieldValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFieldValueListFieldValueResponse listFieldValueResponse;
    public ListFieldValueResponse withListFieldValueResponse(ListFieldValueListFieldValueResponse listFieldValueResponse) {
        this.listFieldValueResponse = listFieldValueResponse;
        return this;
    }
    public Long statusCode;
    public ListFieldValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}