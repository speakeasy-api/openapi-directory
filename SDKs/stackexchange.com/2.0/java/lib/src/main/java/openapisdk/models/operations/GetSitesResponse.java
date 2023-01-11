package openapisdk.models.operations;



public class GetSitesResponse {
    public byte[] body;
    public GetSitesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}