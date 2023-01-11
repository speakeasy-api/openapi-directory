package openapisdk.models.operations;



public class DeleteTokenResponse {
    public byte[] body;
    public DeleteTokenResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public DeleteTokenResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}