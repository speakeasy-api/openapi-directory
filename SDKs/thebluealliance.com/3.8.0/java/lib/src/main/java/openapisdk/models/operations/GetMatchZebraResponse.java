package openapisdk.models.operations;



public class GetMatchZebraResponse {
    public String contentType;
    public GetMatchZebraResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatchZebraResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMatchZebraResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Zebra zebra;
    public GetMatchZebraResponse withZebra(openapisdk.models.shared.Zebra zebra) {
        this.zebra = zebra;
        return this;
    }
}