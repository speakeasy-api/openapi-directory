package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityDevicesDeviceUsersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}