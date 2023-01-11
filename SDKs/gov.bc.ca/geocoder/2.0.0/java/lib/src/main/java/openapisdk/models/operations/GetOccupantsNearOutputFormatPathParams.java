package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsNearOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOccupantsNearOutputFormatOutputFormatEnum outputFormat;
    public GetOccupantsNearOutputFormatPathParams withOutputFormat(GetOccupantsNearOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}