package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveNetworkSwitchStackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public RemoveNetworkSwitchStackPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switchStackId")
    public String switchStackId;
    public RemoveNetworkSwitchStackPathParams withSwitchStackId(String switchStackId) {
        this.switchStackId = switchStackId;
        return this;
    }
}