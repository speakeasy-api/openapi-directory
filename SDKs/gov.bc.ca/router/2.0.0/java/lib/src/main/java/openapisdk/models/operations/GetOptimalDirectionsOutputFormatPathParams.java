package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOptimalDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOptimalDirectionsOutputFormatOutputFormatEnum outputFormat;
    public GetOptimalDirectionsOutputFormatPathParams withOutputFormat(GetOptimalDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}