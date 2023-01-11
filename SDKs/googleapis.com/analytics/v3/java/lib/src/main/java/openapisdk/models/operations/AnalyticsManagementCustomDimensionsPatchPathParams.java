package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomDimensionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementCustomDimensionsPatchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customDimensionId")
    public String customDimensionId;
    public AnalyticsManagementCustomDimensionsPatchPathParams withCustomDimensionId(String customDimensionId) {
        this.customDimensionId = customDimensionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementCustomDimensionsPatchPathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}