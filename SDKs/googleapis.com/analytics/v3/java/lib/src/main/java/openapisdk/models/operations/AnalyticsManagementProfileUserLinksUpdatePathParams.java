package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileUserLinksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementProfileUserLinksUpdatePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linkId")
    public String linkId;
    public AnalyticsManagementProfileUserLinksUpdatePathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public AnalyticsManagementProfileUserLinksUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementProfileUserLinksUpdatePathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}