package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public AndroiddeviceprovisioningPartnersDevicesUnclaimPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}