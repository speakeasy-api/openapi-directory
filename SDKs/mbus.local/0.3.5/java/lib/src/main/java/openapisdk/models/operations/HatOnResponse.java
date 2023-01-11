package openapisdk.models.operations;



public class HatOnResponse {
    public String contentType;
    public HatOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HatOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String textError;
    public HatOnResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}