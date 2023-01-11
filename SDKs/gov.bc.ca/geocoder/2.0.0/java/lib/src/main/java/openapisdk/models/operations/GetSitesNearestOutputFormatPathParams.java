package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesNearestOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetSitesNearestOutputFormatOutputFormatEnum outputFormat;
    public GetSitesNearestOutputFormatPathParams withOutputFormat(GetSitesNearestOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}