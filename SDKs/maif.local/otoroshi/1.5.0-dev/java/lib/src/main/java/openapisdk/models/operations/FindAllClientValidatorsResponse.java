package openapisdk.models.operations;



public class FindAllClientValidatorsResponse {
    public String contentType;
    public FindAllClientValidatorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindAllClientValidatorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationAuthority[] validationAuthorities;
    public FindAllClientValidatorsResponse withValidationAuthorities(openapisdk.models.shared.ValidationAuthority[] validationAuthorities) {
        this.validationAuthorities = validationAuthorities;
        return this;
    }
}