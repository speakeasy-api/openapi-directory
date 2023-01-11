package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckOptimalDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckOptimalDirectionsOutputFormatOutputFormatEnum outputFormat;
    public GetTruckOptimalDirectionsOutputFormatPathParams withOutputFormat(GetTruckOptimalDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}