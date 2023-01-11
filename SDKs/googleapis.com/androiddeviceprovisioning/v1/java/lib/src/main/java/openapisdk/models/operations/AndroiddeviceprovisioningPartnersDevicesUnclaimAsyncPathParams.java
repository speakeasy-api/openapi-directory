package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}