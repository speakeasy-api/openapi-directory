package openapisdk.models.operations;



public class PatchClientValidatorResponse {
    public String contentType;
    public PatchClientValidatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchClientValidatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationAuthority validationAuthority;
    public PatchClientValidatorResponse withValidationAuthority(openapisdk.models.shared.ValidationAuthority validationAuthority) {
        this.validationAuthority = validationAuthority;
        return this;
    }
}