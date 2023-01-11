package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchPortPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=portId")
    public String portId;
    public UpdateDeviceSwitchPortPathParams withPortId(String portId) {
        this.portId = portId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceSwitchPortPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}