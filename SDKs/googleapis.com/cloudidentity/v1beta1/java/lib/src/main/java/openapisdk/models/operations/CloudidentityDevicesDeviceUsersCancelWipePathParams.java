package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersCancelWipePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityDevicesDeviceUsersCancelWipePathParams withName(String name) {
        this.name = name;
        return this;
    }
}