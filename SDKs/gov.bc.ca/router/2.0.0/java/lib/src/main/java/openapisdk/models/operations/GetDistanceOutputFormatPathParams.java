package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistanceOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetDistanceOutputFormatOutputFormatEnum outputFormat;
    public GetDistanceOutputFormatPathParams withOutputFormat(GetDistanceOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}