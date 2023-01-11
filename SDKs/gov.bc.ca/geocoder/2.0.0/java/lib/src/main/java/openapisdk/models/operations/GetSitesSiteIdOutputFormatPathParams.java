package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesSiteIdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetSitesSiteIdOutputFormatOutputFormatEnum outputFormat;
    public GetSitesSiteIdOutputFormatPathParams withOutputFormat(GetSitesSiteIdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteID")
    public String siteID;
    public GetSitesSiteIdOutputFormatPathParams withSiteId(String siteID) {
        this.siteID = siteID;
        return this;
    }
}