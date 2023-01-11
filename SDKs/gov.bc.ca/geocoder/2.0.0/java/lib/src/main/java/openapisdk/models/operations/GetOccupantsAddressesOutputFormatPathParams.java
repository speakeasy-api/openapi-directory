package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsAddressesOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOccupantsAddressesOutputFormatOutputFormatEnum outputFormat;
    public GetOccupantsAddressesOutputFormatPathParams withOutputFormat(GetOccupantsAddressesOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}