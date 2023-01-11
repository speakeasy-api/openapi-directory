package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostRouteOutputFormatOutputFormatEnum outputFormat;
    public PostRouteOutputFormatPathParams withOutputFormat(PostRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}