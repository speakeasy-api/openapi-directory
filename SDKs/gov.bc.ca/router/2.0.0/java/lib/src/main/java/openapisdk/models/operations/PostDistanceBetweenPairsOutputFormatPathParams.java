package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDistanceBetweenPairsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public PostDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat;
    public PostDistanceBetweenPairsOutputFormatPathParams withOutputFormat(PostDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}