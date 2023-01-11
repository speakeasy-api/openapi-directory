package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminAccountsSearchChangeHistoryEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public String account;
    public AnalyticsadminAccountsSearchChangeHistoryEventsPathParams withAccount(String account) {
        this.account = account;
        return this;
    }
}