package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitesAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteUrl")
    public String siteUrl;
    public WebmastersSitesAddPathParams withSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
        return this;
    }
}