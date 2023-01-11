package openapisdk.models.operations;



public class ChangePasswordResponse {
    public String contentType;
    public ChangePasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public ChangePasswordResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object passwordError;
    public ChangePasswordResponse withPasswordError(Object passwordError) {
        this.passwordError = passwordError;
        return this;
    }
    public Object shopperId;
    public ChangePasswordResponse withShopperId(Object shopperId) {
        this.shopperId = shopperId;
        return this;
    }
    public Long statusCode;
    public ChangePasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}