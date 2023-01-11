package openapisdk.models.shared;



public class ErrorLimit {
    public String code;
    public ErrorLimit withCode(String code) {
        this.code = code;
        return this;
    }
    public Object[] fields;
    public ErrorLimit withFields(Object[] fields) {
        this.fields = fields;
        return this;
    }
    public String message;
    public ErrorLimit withMessage(String message) {
        this.message = message;
        return this;
    }
    public Long retryAfterSec;
    public ErrorLimit withRetryAfterSec(Long retryAfterSec) {
        this.retryAfterSec = retryAfterSec;
        return this;
    }
}