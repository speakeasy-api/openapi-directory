package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressesOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetAddressesOutputFormatOutputFormatEnum outputFormat;
    public GetAddressesOutputFormatPathParams withOutputFormat(GetAddressesOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}