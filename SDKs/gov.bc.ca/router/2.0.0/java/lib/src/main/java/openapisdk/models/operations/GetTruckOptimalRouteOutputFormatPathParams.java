package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckOptimalRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckOptimalRouteOutputFormatOutputFormatEnum outputFormat;
    public GetTruckOptimalRouteOutputFormatPathParams withOutputFormat(GetTruckOptimalRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}