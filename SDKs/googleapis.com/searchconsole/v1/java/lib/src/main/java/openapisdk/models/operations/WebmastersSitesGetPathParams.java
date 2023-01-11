package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitesGetPathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}