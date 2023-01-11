package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyAdWordsLinkId")
    public String webPropertyAdWordsLinkId;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams withWebPropertyAdWordsLinkId(String webPropertyAdWordsLinkId) {
        this.webPropertyAdWordsLinkId = webPropertyAdWordsLinkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}