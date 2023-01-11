package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyUploadAccountRequest {
    public IdentitytoolkitRelyingpartyUploadAccountQueryParams queryParams;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withQueryParams(IdentitytoolkitRelyingpartyUploadAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyUploadAccountRequest request;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyUploadAccountRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyUploadAccountSecurity security;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withSecurity(IdentitytoolkitRelyingpartyUploadAccountSecurity security) {
        this.security = security;
        return this;
    }
}