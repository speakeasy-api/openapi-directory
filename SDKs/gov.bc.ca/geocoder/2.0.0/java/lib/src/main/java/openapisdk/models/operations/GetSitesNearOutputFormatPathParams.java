package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesNearOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetSitesNearOutputFormatOutputFormatEnum outputFormat;
    public GetSitesNearOutputFormatPathParams withOutputFormat(GetSitesNearOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}