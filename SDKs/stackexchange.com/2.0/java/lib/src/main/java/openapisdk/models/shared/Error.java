package openapisdk.models.shared;



public class Error {
    public Double errorId;
    public Error withErrorId(Double errorId) {
        this.errorId = errorId;
        return this;
    }
    public String errorMessage;
    public Error withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public String errorName;
    public Error withErrorName(String errorName) {
        this.errorName = errorName;
        return this;
    }
}