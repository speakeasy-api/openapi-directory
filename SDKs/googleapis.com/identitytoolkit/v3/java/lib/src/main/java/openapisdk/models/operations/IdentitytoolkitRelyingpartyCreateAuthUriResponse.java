package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyCreateAuthUriResponse {
    public String contentType;
    public IdentitytoolkitRelyingpartyCreateAuthUriResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAuthUriResponse createAuthUriResponse;
    public IdentitytoolkitRelyingpartyCreateAuthUriResponse withCreateAuthUriResponse(openapisdk.models.shared.CreateAuthUriResponse createAuthUriResponse) {
        this.createAuthUriResponse = createAuthUriResponse;
        return this;
    }
    public Long statusCode;
    public IdentitytoolkitRelyingpartyCreateAuthUriResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}