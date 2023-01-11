package openapisdk.models.operations;



public class ListEntityResponse {
    public String contentType;
    public ListEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEntityListEntityResponse listEntityResponse;
    public ListEntityResponse withListEntityResponse(ListEntityListEntityResponse listEntityResponse) {
        this.listEntityResponse = listEntityResponse;
        return this;
    }
    public Long statusCode;
    public ListEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}