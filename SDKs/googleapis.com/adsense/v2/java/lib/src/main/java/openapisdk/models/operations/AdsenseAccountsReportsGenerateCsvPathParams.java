package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGenerateCsvPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public AdsenseAccountsReportsGenerateCsvPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}