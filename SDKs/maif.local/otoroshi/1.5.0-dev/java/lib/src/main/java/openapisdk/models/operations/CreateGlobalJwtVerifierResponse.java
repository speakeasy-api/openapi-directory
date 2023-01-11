package openapisdk.models.operations;



public class CreateGlobalJwtVerifierResponse {
    public String contentType;
    public CreateGlobalJwtVerifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier;
    public CreateGlobalJwtVerifierResponse withGlobalJwtVerifier(openapisdk.models.shared.GlobalJwtVerifier globalJwtVerifier) {
        this.globalJwtVerifier = globalJwtVerifier;
        return this;
    }
    public Long statusCode;
    public CreateGlobalJwtVerifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}