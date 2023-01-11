package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckDistanceOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckDistanceOutputFormatOutputFormatEnum outputFormat;
    public GetTruckDistanceOutputFormatPathParams withOutputFormat(GetTruckDistanceOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}