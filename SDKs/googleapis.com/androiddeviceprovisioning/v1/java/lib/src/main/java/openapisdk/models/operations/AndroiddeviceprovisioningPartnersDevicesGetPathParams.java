package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AndroiddeviceprovisioningPartnersDevicesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}