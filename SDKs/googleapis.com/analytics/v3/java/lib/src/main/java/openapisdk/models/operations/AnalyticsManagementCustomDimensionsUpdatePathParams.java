package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomDimensionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementCustomDimensionsUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customDimensionId")
    public String customDimensionId;
    public AnalyticsManagementCustomDimensionsUpdatePathParams withCustomDimensionId(String customDimensionId) {
        this.customDimensionId = customDimensionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementCustomDimensionsUpdatePathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}