package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementFiltersPatchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterId")
    public String filterId;
    public AnalyticsManagementFiltersPatchPathParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
}