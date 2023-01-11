package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsCustomersEntitlementsChangeRenewalSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}