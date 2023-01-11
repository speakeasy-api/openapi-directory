package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertiesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementWebpropertiesInsertPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}