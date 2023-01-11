package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementRemarketingAudienceDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementRemarketingAudienceDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=remarketingAudienceId")
    public String remarketingAudienceId;
    public AnalyticsManagementRemarketingAudienceDeletePathParams withRemarketingAudienceId(String remarketingAudienceId) {
        this.remarketingAudienceId = remarketingAudienceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementRemarketingAudienceDeletePathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}