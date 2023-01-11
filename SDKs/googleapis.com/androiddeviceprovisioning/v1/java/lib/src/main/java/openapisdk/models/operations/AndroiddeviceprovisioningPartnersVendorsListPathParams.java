package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersVendorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroiddeviceprovisioningPartnersVendorsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}