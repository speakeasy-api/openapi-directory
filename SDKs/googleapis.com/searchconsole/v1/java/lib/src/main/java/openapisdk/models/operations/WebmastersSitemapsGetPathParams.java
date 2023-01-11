package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=feedpath")
    public String feedpath;
    public WebmastersSitemapsGetPathParams withFeedpath(String feedpath) {
        this.feedpath = feedpath;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitemapsGetPathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}