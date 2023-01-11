package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public VerifyRequestPathParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
}