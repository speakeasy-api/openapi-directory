package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}