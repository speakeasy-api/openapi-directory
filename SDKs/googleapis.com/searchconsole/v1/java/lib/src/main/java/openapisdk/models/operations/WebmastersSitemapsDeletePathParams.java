package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=feedpath")
    public String feedpath;
    public WebmastersSitemapsDeletePathParams withFeedpath(String feedpath) {
        this.feedpath = feedpath;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitemapsDeletePathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}