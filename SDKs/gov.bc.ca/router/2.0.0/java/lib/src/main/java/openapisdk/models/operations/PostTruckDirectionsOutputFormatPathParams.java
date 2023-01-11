package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckDirectionsOutputFormatOutputFormatEnum outputFormat;
    public PostTruckDirectionsOutputFormatPathParams withOutputFormat(PostTruckDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}