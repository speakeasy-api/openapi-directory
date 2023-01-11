package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsListSubscribersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public CloudchannelAccountsListSubscribersPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}