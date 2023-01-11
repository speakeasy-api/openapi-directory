package openapisdk.models.shared;



public class Errors {
    public String description;
    public Errors withDescription(String description) {
        this.description = description;
        return this;
    }
    public Long errorId;
    public Errors withErrorId(Long errorId) {
        this.errorId = errorId;
        return this;
    }
    public String errorName;
    public Errors withErrorName(String errorName) {
        this.errorName = errorName;
        return this;
    }
}