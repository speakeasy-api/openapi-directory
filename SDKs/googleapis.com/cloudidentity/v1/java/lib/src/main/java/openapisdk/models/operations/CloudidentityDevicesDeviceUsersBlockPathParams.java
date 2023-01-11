package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersBlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityDevicesDeviceUsersBlockPathParams withName(String name) {
        this.name = name;
        return this;
    }
}