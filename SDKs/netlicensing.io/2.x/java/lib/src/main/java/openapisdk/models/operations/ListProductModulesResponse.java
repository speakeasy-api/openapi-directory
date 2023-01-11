package openapisdk.models.operations;



public class ListProductModulesResponse {
    public byte[] body;
    public ListProductModulesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListProductModulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListProductModulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] netlicensings;
    public ListProductModulesResponse withNetlicensings(Object[] netlicensings) {
        this.netlicensings = netlicensings;
        return this;
    }
}