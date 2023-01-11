package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersCustomersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partnerId")
    public String partnerId;
    public AndroiddeviceprovisioningPartnersCustomersListPathParams withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}