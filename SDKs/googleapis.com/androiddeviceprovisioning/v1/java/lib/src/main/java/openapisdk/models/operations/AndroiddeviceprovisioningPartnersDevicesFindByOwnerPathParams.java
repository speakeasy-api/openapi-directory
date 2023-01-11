package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public AndroiddeviceprovisioningPartnersDevicesFindByOwnerPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}