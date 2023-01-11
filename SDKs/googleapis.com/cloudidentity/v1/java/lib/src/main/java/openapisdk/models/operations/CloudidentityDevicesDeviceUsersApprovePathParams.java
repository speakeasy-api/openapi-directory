package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersApprovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityDevicesDeviceUsersApprovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}