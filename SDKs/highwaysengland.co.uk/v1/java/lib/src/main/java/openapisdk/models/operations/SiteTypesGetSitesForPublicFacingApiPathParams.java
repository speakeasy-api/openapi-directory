package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteTypesGetSitesForPublicFacingApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteType_Id")
    public Integer siteTypeId;
    public SiteTypesGetSitesForPublicFacingApiPathParams withSiteTypeId(Integer siteTypeId) {
        this.siteTypeId = siteTypeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public SiteTypesGetSitesForPublicFacingApiPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}