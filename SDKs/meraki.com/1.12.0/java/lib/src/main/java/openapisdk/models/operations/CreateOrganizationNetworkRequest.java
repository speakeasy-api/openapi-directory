package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationNetworkRequest {
    public CreateOrganizationNetworkPathParams pathParams;
    public CreateOrganizationNetworkRequest withPathParams(CreateOrganizationNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationNetworkRequestBody request;
    public CreateOrganizationNetworkRequest withRequest(CreateOrganizationNetworkRequestBody request) {
        this.request = request;
        return this;
    }
}