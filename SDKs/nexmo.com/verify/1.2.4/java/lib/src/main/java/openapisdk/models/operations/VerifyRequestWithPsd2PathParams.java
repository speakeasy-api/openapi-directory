package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequestWithPsd2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public VerifyRequestWithPsd2PathParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
}