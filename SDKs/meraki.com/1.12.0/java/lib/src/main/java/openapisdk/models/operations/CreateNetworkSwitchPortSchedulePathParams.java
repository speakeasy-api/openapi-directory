package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchPortSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkSwitchPortSchedulePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}