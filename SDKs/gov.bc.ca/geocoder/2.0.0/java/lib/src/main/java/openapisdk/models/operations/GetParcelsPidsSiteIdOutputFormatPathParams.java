package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetParcelsPidsSiteIdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetParcelsPidsSiteIdOutputFormatOutputFormatEnum outputFormat;
    public GetParcelsPidsSiteIdOutputFormatPathParams withOutputFormat(GetParcelsPidsSiteIdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=siteID")
    public String siteID;
    public GetParcelsPidsSiteIdOutputFormatPathParams withSiteId(String siteID) {
        this.siteID = siteID;
        return this;
    }
}