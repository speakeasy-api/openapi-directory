package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CombineOrganizationNetworksRequest {
    public CombineOrganizationNetworksPathParams pathParams;
    public CombineOrganizationNetworksRequest withPathParams(CombineOrganizationNetworksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CombineOrganizationNetworksRequestBody request;
    public CombineOrganizationNetworksRequest withRequest(CombineOrganizationNetworksRequestBody request) {
        this.request = request;
        return this;
    }
}