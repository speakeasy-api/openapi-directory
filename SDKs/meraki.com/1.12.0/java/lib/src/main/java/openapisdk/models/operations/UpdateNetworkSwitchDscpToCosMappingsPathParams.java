package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchDscpToCosMappingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchDscpToCosMappingsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}