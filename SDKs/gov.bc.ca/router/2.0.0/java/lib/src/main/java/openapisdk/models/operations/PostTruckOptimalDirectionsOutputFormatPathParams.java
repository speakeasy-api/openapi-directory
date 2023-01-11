package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckOptimalDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckOptimalDirectionsOutputFormatOutputFormatEnum outputFormat;
    public PostTruckOptimalDirectionsOutputFormatPathParams withOutputFormat(PostTruckOptimalDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}