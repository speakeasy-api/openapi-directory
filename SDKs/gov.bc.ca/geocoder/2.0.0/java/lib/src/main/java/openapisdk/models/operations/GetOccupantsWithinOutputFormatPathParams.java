package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsWithinOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOccupantsWithinOutputFormatOutputFormatEnum outputFormat;
    public GetOccupantsWithinOutputFormatPathParams withOutputFormat(GetOccupantsWithinOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}