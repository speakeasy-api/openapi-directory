package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsChannelPartnerLinksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsChannelPartnerLinksCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}