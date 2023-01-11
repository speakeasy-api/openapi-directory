package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckDistanceBetweenPairsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat;
    public PostTruckDistanceBetweenPairsOutputFormatPathParams withOutputFormat(PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}