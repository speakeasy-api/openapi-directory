package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGeneratePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public AdsenseAccountsReportsGeneratePathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}