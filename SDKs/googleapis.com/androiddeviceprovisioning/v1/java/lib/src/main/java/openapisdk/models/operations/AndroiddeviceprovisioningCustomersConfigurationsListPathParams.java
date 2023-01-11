package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersConfigurationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AndroiddeviceprovisioningCustomersConfigurationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}