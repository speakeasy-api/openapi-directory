package openapisdk.models.operations;



public class FindClientValidatorByIdResponse {
    public String contentType;
    public FindClientValidatorByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindClientValidatorByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationAuthority validationAuthority;
    public FindClientValidatorByIdResponse withValidationAuthority(openapisdk.models.shared.ValidationAuthority validationAuthority) {
        this.validationAuthority = validationAuthority;
        return this;
    }
}