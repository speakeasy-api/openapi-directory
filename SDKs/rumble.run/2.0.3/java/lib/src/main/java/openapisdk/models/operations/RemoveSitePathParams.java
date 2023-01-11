package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_id")
    public String siteId;
    public RemoveSitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}