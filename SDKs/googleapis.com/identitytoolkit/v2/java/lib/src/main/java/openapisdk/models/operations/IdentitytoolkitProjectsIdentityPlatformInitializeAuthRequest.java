package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest {
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams pathParams;
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest withPathParams(IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthQueryParams queryParams;
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest withQueryParams(IdentitytoolkitProjectsIdentityPlatformInitializeAuthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity security;
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest withSecurity(IdentitytoolkitProjectsIdentityPlatformInitializeAuthSecurity security) {
        this.security = security;
        return this;
    }
}