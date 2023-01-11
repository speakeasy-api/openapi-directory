package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchAccessControlListsRequest {
    public UpdateNetworkSwitchAccessControlListsPathParams pathParams;
    public UpdateNetworkSwitchAccessControlListsRequest withPathParams(UpdateNetworkSwitchAccessControlListsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchAccessControlListsRequestBody request;
    public UpdateNetworkSwitchAccessControlListsRequest withRequest(UpdateNetworkSwitchAccessControlListsRequestBody request) {
        this.request = request;
        return this;
    }
}