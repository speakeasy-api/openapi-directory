package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyCheckPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public openapisdk.models.shared.FormatEnum format;
    public VerifyCheckPathParams withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
}