package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsAdminsPatchRequest {
    public MybusinessaccountmanagementLocationsAdminsPatchPathParams pathParams;
    public MybusinessaccountmanagementLocationsAdminsPatchRequest withPathParams(MybusinessaccountmanagementLocationsAdminsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessaccountmanagementLocationsAdminsPatchQueryParams queryParams;
    public MybusinessaccountmanagementLocationsAdminsPatchRequest withQueryParams(MybusinessaccountmanagementLocationsAdminsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminInput request;
    public MybusinessaccountmanagementLocationsAdminsPatchRequest withRequest(openapisdk.models.shared.AdminInput request) {
        this.request = request;
        return this;
    }
}