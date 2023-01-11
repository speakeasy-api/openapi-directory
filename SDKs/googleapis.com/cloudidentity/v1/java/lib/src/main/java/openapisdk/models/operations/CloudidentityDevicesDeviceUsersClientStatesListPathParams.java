package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersClientStatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityDevicesDeviceUsersClientStatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}