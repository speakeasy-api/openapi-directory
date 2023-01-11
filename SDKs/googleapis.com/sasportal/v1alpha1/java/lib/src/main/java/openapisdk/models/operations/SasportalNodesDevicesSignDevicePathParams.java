package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesDevicesSignDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SasportalNodesDevicesSignDevicePathParams withName(String name) {
        this.name = name;
        return this;
    }
}