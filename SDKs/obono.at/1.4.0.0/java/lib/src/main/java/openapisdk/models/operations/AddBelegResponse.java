package openapisdk.models.operations;



public class AddBelegResponse {
    public String contentType;
    public AddBelegResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddBelegResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddBelegResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}