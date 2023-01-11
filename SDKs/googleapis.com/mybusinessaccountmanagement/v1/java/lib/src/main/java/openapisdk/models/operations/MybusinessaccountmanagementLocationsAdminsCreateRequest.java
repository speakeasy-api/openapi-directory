package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsAdminsCreateRequest {
    public MybusinessaccountmanagementLocationsAdminsCreatePathParams pathParams;
    public MybusinessaccountmanagementLocationsAdminsCreateRequest withPathParams(MybusinessaccountmanagementLocationsAdminsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessaccountmanagementLocationsAdminsCreateQueryParams queryParams;
    public MybusinessaccountmanagementLocationsAdminsCreateRequest withQueryParams(MybusinessaccountmanagementLocationsAdminsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminInput request;
    public MybusinessaccountmanagementLocationsAdminsCreateRequest withRequest(openapisdk.models.shared.AdminInput request) {
        this.request = request;
        return this;
    }
}