package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvisionNetworkClientsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public ProvisionNetworkClientsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}