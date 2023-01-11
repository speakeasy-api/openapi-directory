package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroiddeviceprovisioningCustomersDevicesRemoveConfigurationPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}