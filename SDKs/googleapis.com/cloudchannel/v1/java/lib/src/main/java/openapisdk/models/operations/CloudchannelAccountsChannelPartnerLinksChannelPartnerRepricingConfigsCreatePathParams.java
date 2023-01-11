package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}