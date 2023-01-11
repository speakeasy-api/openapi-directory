package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDistanceOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostDistanceOutputFormatOutputFormatEnum outputFormat;
    public PostDistanceOutputFormatPathParams withOutputFormat(PostDistanceOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}