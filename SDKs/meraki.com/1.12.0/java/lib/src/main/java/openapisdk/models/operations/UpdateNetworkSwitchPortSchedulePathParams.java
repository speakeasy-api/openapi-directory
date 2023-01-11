package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchPortSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchPortSchedulePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portScheduleId")
    public String portScheduleId;
    public UpdateNetworkSwitchPortSchedulePathParams withPortScheduleId(String portScheduleId) {
        this.portScheduleId = portScheduleId;
        return this;
    }
}