package openapisdk.models.shared;



public class ErrorDetail {
    public String code;
    public ErrorDetail withCode(String code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, String[]> context;
    public ErrorDetail withContext(java.util.Map<String, String[]> context) {
        this.context = context;
        return this;
    }
    public String in;
    public ErrorDetail withIn(String in) {
        this.in = in;
        return this;
    }
    public String message;
    public ErrorDetail withMessage(String message) {
        this.message = message;
        return this;
    }
    public String subCategory;
    public ErrorDetail withSubCategory(String subCategory) {
        this.subCategory = subCategory;
        return this;
    }
}