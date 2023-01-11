package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckDistanceBetweenPairsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat;
    public GetTruckDistanceBetweenPairsOutputFormatPathParams withOutputFormat(GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}