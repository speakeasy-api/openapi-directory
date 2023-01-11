package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementFiltersDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterId")
    public String filterId;
    public AnalyticsManagementFiltersDeletePathParams withFilterId(String filterId) {
        this.filterId = filterId;
        return this;
    }
}