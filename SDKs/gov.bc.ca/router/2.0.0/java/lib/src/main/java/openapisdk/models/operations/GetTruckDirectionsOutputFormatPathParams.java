package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTruckDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetTruckDirectionsOutputFormatOutputFormatEnum outputFormat;
    public GetTruckDirectionsOutputFormatPathParams withOutputFormat(GetTruckDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}