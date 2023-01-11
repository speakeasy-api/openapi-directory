package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDirectionsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetDirectionsOutputFormatOutputFormatEnum outputFormat;
    public GetDirectionsOutputFormatPathParams withOutputFormat(GetDirectionsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}