package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOptimalRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOptimalRouteOutputFormatOutputFormatEnum outputFormat;
    public GetOptimalRouteOutputFormatPathParams withOutputFormat(GetOptimalRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}