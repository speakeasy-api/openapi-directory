package openapisdk.models.operations;



public class ListTokensResponse {
    public byte[] body;
    public ListTokensResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListTokensResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}