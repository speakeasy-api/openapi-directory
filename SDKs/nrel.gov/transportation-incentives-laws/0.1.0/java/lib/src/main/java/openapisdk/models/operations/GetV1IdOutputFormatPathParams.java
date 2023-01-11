package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV1IdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetV1IdOutputFormatPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=output_format")
    public GetV1IdOutputFormatOutputFormatEnum outputFormat;
    public GetV1IdOutputFormatPathParams withOutputFormat(GetV1IdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}