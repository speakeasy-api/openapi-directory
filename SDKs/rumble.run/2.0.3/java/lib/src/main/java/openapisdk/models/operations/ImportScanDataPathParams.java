package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportScanDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_id")
    public String siteId;
    public ImportScanDataPathParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}