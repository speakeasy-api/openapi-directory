package openapisdk.models.shared;



public class Error {
    public String category;
    public Error withCategory(String category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, String[]> context;
    public Error withContext(java.util.Map<String, String[]> context) {
        this.context = context;
        return this;
    }
    public String correlationId;
    public Error withCorrelationId(String correlationId) {
        this.correlationId = correlationId;
        return this;
    }
    public ErrorDetail[] errors;
    public Error withErrors(ErrorDetail[] errors) {
        this.errors = errors;
        return this;
    }
    public java.util.Map<String, String> links;
    public Error withLinks(java.util.Map<String, String> links) {
        this.links = links;
        return this;
    }
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    public String subCategory;
    public Error withSubCategory(String subCategory) {
        this.subCategory = subCategory;
        return this;
    }
}