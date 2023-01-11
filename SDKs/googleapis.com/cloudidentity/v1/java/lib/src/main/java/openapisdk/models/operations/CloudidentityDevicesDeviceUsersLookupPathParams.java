package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersLookupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityDevicesDeviceUsersLookupPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}