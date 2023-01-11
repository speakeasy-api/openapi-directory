package openapisdk.models.operations;



public class GetImagesResponse {
    public byte[] body;
    public GetImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}