package openapisdk.models.operations;



public class IdentitytoolkitRelyingpartyGetPublicKeysRequest {
    public IdentitytoolkitRelyingpartyGetPublicKeysQueryParams queryParams;
    public IdentitytoolkitRelyingpartyGetPublicKeysRequest withQueryParams(IdentitytoolkitRelyingpartyGetPublicKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IdentitytoolkitRelyingpartyGetPublicKeysSecurity security;
    public IdentitytoolkitRelyingpartyGetPublicKeysRequest withSecurity(IdentitytoolkitRelyingpartyGetPublicKeysSecurity security) {
        this.security = security;
        return this;
    }
}