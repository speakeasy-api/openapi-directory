package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsAddPublicKeyRequest {
    public CloudshellUsersEnvironmentsAddPublicKeyPathParams pathParams;
    public CloudshellUsersEnvironmentsAddPublicKeyRequest withPathParams(CloudshellUsersEnvironmentsAddPublicKeyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudshellUsersEnvironmentsAddPublicKeyQueryParams queryParams;
    public CloudshellUsersEnvironmentsAddPublicKeyRequest withQueryParams(CloudshellUsersEnvironmentsAddPublicKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddPublicKeyRequest request;
    public CloudshellUsersEnvironmentsAddPublicKeyRequest withRequest(openapisdk.models.shared.AddPublicKeyRequest request) {
        this.request = request;
        return this;
    }
    public CloudshellUsersEnvironmentsAddPublicKeySecurity security;
    public CloudshellUsersEnvironmentsAddPublicKeyRequest withSecurity(CloudshellUsersEnvironmentsAddPublicKeySecurity security) {
        this.security = security;
        return this;
    }
}