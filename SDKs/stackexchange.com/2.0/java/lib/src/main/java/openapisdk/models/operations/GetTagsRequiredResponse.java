package openapisdk.models.operations;



public class GetTagsRequiredResponse {
    public byte[] body;
    public GetTagsRequiredResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTagsRequiredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTagsRequiredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}