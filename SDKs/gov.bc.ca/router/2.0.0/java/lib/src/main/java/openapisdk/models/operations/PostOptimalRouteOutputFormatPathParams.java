package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOptimalRouteOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostOptimalRouteOutputFormatOutputFormatEnum outputFormat;
    public PostOptimalRouteOutputFormatPathParams withOutputFormat(PostOptimalRouteOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}