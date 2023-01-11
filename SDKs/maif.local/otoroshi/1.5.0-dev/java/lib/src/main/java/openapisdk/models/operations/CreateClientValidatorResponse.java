package openapisdk.models.operations;



public class CreateClientValidatorResponse {
    public String contentType;
    public CreateClientValidatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateClientValidatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationAuthority validationAuthority;
    public CreateClientValidatorResponse withValidationAuthority(openapisdk.models.shared.ValidationAuthority validationAuthority) {
        this.validationAuthority = validationAuthority;
        return this;
    }
}