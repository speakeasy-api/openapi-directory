package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_id")
    public String siteId;
    public UpdateSitePathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}