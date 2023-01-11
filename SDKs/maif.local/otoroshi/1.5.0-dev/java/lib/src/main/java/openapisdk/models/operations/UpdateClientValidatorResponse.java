package openapisdk.models.operations;



public class UpdateClientValidatorResponse {
    public String contentType;
    public UpdateClientValidatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateClientValidatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationAuthority validationAuthority;
    public UpdateClientValidatorResponse withValidationAuthority(openapisdk.models.shared.ValidationAuthority validationAuthority) {
        this.validationAuthority = validationAuthority;
        return this;
    }
}