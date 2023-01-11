package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvisionNetworkClientsRequest {
    public ProvisionNetworkClientsPathParams pathParams;
    public ProvisionNetworkClientsRequest withPathParams(ProvisionNetworkClientsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ProvisionNetworkClientsRequestBody request;
    public ProvisionNetworkClientsRequest withRequest(ProvisionNetworkClientsRequestBody request) {
        this.request = request;
        return this;
    }
}