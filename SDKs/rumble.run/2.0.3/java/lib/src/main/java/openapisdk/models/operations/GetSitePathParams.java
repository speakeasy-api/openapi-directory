package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_id")
    public String siteId;
    public GetSitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}