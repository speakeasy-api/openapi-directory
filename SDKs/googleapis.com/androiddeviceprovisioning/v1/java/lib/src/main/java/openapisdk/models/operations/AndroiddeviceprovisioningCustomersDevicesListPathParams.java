package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroiddeviceprovisioningCustomersDevicesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}