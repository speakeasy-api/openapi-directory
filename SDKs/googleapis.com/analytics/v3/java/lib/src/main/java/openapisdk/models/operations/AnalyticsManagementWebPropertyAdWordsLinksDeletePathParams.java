package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyAdWordsLinkId")
    public String webPropertyAdWordsLinkId;
    public AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams withWebPropertyAdWordsLinkId(String webPropertyAdWordsLinkId) {
        this.webPropertyAdWordsLinkId = webPropertyAdWordsLinkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webPropertyId")
    public String webPropertyId;
    public AnalyticsManagementWebPropertyAdWordsLinksDeletePathParams withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}