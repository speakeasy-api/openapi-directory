package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyDownloadAccountRequest {
    public IdentitytoolkitRelyingpartyDownloadAccountQueryParams queryParams;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withQueryParams(IdentitytoolkitRelyingpartyDownloadAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyDownloadAccountRequest request;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyDownloadAccountRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyDownloadAccountSecurity security;
    public IdentitytoolkitRelyingpartyDownloadAccountRequest withSecurity(IdentitytoolkitRelyingpartyDownloadAccountSecurity security) {
        this.security = security;
        return this;
    }
}