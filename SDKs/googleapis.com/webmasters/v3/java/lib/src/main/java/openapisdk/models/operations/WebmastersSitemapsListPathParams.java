package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitemapsListPathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}