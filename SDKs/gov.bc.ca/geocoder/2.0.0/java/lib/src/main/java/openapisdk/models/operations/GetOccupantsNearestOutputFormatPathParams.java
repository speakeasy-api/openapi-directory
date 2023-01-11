package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsNearestOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOccupantsNearestOutputFormatOutputFormatEnum outputFormat;
    public GetOccupantsNearestOutputFormatPathParams withOutputFormat(GetOccupantsNearestOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}