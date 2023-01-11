package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesWithinOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetSitesWithinOutputFormatOutputFormatEnum outputFormat;
    public GetSitesWithinOutputFormatPathParams withOutputFormat(GetSitesWithinOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}