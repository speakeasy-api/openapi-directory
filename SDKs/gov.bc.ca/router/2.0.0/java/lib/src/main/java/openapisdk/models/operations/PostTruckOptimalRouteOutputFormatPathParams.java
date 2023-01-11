package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckOptimalRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckOptimalRouteOutputFormatOutputFormatEnum outputFormat;
    public PostTruckOptimalRouteOutputFormatPathParams withOutputFormat(PostTruckOptimalRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}