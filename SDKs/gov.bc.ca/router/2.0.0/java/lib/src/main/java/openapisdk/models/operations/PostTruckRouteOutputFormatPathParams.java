package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruckRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostTruckRouteOutputFormatOutputFormatEnum outputFormat;
    public PostTruckRouteOutputFormatPathParams withOutputFormat(PostTruckRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}