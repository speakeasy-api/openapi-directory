package openapisdk.models.operations;



public class HatResponse {
    public String contentType;
    public HatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object hat;
    public HatResponse withHat(Object hat) {
        this.hat = hat;
        return this;
    }
    public String textError;
    public HatResponse withTextError(String textError) {
        this.textError = textError;
        return this;
    }
}