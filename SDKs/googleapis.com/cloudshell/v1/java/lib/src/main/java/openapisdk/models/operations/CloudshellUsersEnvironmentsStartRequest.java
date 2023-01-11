package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsStartRequest {
    public CloudshellUsersEnvironmentsStartPathParams pathParams;
    public CloudshellUsersEnvironmentsStartRequest withPathParams(CloudshellUsersEnvironmentsStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudshellUsersEnvironmentsStartQueryParams queryParams;
    public CloudshellUsersEnvironmentsStartRequest withQueryParams(CloudshellUsersEnvironmentsStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartEnvironmentRequest request;
    public CloudshellUsersEnvironmentsStartRequest withRequest(openapisdk.models.shared.StartEnvironmentRequest request) {
        this.request = request;
        return this;
    }
    public CloudshellUsersEnvironmentsStartSecurity security;
    public CloudshellUsersEnvironmentsStartRequest withSecurity(CloudshellUsersEnvironmentsStartSecurity security) {
        this.security = security;
        return this;
    }
}