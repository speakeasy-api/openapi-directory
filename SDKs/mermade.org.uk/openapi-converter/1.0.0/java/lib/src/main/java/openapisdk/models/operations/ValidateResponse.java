package openapisdk.models.operations;



public class ValidateResponse {
    public byte[] body;
    public ValidateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validate400ApplicationJSONAny;
    public ValidateResponse withValidate400ApplicationJsonAny(Object validate400ApplicationJSONAny) {
        this.validate400ApplicationJSONAny = validate400ApplicationJSONAny;
        return this;
    }
    public openapisdk.models.shared.ValidationResult validationResult;
    public ValidateResponse withValidationResult(openapisdk.models.shared.ValidationResult validationResult) {
        this.validationResult = validationResult;
        return this;
    }
}