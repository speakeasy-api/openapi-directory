package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkPiiRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkPiiRequestPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}