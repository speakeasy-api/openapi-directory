package openapisdk.models.operations;



public class ListProductsResponse {
    public byte[] body;
    public ListProductsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListProductsResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}