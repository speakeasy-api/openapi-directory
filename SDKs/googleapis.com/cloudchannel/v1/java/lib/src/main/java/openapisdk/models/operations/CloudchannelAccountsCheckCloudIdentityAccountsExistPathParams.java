package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelAccountsCheckCloudIdentityAccountsExistPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}