package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlaycustomappAccountsCustomAppsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public PlaycustomappAccountsCustomAppsCreatePathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}