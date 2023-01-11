package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsSubmitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=feedpath")
    public String feedpath;
    public WebmastersSitemapsSubmitPathParams withFeedpath(String feedpath) {
        this.feedpath = feedpath;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitemapsSubmitPathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}