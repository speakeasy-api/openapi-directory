package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckDistanceOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckDistanceOutputFormatOutputFormatEnum outputFormat;
    public PostTruckDistanceOutputFormatPathParams withOutputFormat(PostTruckDistanceOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}