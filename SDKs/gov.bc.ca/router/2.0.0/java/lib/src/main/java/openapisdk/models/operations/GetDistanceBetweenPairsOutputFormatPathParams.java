package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistanceBetweenPairsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat;
    public GetDistanceBetweenPairsOutputFormatPathParams withOutputFormat(GetDistanceBetweenPairsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}