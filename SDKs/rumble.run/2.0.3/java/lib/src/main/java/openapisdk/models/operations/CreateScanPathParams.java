package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_id")
    public String siteId;
    public CreateScanPathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}