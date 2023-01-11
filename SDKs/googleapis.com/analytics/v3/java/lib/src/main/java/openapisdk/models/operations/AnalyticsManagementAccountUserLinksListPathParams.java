package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountUserLinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementAccountUserLinksListPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}