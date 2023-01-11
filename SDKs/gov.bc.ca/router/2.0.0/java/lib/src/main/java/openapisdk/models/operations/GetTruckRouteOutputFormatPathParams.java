package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckRouteOutputFormatOutputFormatEnum outputFormat;
    public GetTruckRouteOutputFormatPathParams withOutputFormat(GetTruckRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}