package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVVersionSitesSiteIdsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=site_Ids")
    public String siteIds;
    public GetVVersionSitesSiteIdsPathParams withSiteIds(String siteIds) {
        this.siteIds = siteIds;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public GetVVersionSitesSiteIdsPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}