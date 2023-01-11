package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroiddeviceprovisioningCustomersDevicesUnclaimPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}