package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNetworkSwitchStackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public AddNetworkSwitchStackPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switchStackId")
    public String switchStackId;
    public AddNetworkSwitchStackPathParams withSwitchStackId(String switchStackId) {
        this.switchStackId = switchStackId;
        return this;
    }
}