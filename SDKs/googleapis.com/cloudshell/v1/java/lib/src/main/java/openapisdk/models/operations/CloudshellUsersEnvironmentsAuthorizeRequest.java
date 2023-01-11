package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsAuthorizeRequest {
    public CloudshellUsersEnvironmentsAuthorizePathParams pathParams;
    public CloudshellUsersEnvironmentsAuthorizeRequest withPathParams(CloudshellUsersEnvironmentsAuthorizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudshellUsersEnvironmentsAuthorizeQueryParams queryParams;
    public CloudshellUsersEnvironmentsAuthorizeRequest withQueryParams(CloudshellUsersEnvironmentsAuthorizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorizeEnvironmentRequest request;
    public CloudshellUsersEnvironmentsAuthorizeRequest withRequest(openapisdk.models.shared.AuthorizeEnvironmentRequest request) {
        this.request = request;
        return this;
    }
    public CloudshellUsersEnvironmentsAuthorizeSecurity security;
    public CloudshellUsersEnvironmentsAuthorizeRequest withSecurity(CloudshellUsersEnvironmentsAuthorizeSecurity security) {
        this.security = security;
        return this;
    }
}