package openapisdk.models.operations;



public class FindAllGlobalJwtVerifiersResponse {
    public String contentType;
    public FindAllGlobalJwtVerifiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GlobalJwtVerifier[] globalJwtVerifiers;
    public FindAllGlobalJwtVerifiersResponse withGlobalJwtVerifiers(openapisdk.models.shared.GlobalJwtVerifier[] globalJwtVerifiers) {
        this.globalJwtVerifiers = globalJwtVerifiers;
        return this;
    }
    public Long statusCode;
    public FindAllGlobalJwtVerifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}