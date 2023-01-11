package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesSiteIdSubsitesOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum outputFormat;
    public GetSitesSiteIdSubsitesOutputFormatPathParams withOutputFormat(GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteID")
    public String siteID;
    public GetSitesSiteIdSubsitesOutputFormatPathParams withSiteId(String siteID) {
        this.siteID = siteID;
        return this;
    }
}