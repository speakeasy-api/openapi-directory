package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetRouteOutputFormatOutputFormatEnum outputFormat;
    public GetRouteOutputFormatPathParams withOutputFormat(GetRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}