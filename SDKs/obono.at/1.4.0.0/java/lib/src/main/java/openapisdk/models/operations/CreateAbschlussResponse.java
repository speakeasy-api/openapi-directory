package openapisdk.models.operations;



public class CreateAbschlussResponse {
    public String contentType;
    public CreateAbschlussResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateAbschlussResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateAbschlussResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}