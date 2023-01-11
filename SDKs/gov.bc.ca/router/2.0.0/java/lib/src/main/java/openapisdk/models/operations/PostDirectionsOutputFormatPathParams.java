package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostDirectionsOutputFormatOutputFormatEnum outputFormat;
    public PostDirectionsOutputFormatPathParams withOutputFormat(PostDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}