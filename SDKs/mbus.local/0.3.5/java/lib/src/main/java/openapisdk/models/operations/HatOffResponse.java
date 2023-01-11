package openapisdk.models.operations;



public class HatOffResponse {
    public String contentType;
    public HatOffResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HatOffResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String textError;
    public HatOffResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}