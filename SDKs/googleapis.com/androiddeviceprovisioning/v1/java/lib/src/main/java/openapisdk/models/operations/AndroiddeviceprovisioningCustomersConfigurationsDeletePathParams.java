package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}