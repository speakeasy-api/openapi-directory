package openapisdk.models.operations;



public class RotateAccountKeyRequest {
    public RotateAccountKeyPathParams pathParams;
    public RotateAccountKeyRequest withPathParams(RotateAccountKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RotateAccountKeySecurity security;
    public RotateAccountKeyRequest withSecurity(RotateAccountKeySecurity security) {
        this.security = security;
        return this;
    }
}