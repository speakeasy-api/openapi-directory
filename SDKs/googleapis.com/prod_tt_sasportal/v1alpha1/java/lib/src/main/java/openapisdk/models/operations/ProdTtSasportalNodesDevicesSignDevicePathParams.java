package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesDevicesSignDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ProdTtSasportalNodesDevicesSignDevicePathParams withName(String name) {
        this.name = name;
        return this;
    }
}