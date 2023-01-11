package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1CategoryListOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=output_format")
    public GetV1CategoryListOutputFormatOutputFormatEnum outputFormat;
    public GetV1CategoryListOutputFormatPathParams withOutputFormat(GetV1CategoryListOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}