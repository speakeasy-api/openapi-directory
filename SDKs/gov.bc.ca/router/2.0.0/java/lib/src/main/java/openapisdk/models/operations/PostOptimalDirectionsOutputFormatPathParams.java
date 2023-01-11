package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOptimalDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostOptimalDirectionsOutputFormatOutputFormatEnum outputFormat;
    public PostOptimalDirectionsOutputFormatPathParams withOutputFormat(PostOptimalDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}