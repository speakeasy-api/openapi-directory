package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsRegisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public CloudchannelAccountsRegisterPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}