package openapisdk.models.operations;



public class GetMeAnswersResponse {
    public byte[] body;
    public GetMeAnswersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeAnswersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeAnswersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}