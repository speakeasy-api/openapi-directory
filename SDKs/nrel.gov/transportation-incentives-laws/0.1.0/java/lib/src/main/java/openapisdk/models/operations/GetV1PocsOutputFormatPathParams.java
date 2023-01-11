package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1PocsOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=output_format")
    public GetV1PocsOutputFormatOutputFormatEnum outputFormat;
    public GetV1PocsOutputFormatPathParams withOutputFormat(GetV1PocsOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}