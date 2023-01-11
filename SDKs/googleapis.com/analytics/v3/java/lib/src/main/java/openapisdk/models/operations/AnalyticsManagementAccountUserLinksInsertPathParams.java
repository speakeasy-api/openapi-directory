package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountUserLinksInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementAccountUserLinksInsertPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}