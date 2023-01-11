package openapisdk.models.shared;



public class Error {
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    public Long status;
    public Error withStatus(Long status) {
        this.status = status;
        return this;
    }
}