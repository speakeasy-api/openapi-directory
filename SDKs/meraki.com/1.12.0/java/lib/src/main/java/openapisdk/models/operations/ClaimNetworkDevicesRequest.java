package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClaimNetworkDevicesRequest {
    public ClaimNetworkDevicesPathParams pathParams;
    public ClaimNetworkDevicesRequest withPathParams(ClaimNetworkDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ClaimNetworkDevicesRequestBody request;
    public ClaimNetworkDevicesRequest withRequest(ClaimNetworkDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}