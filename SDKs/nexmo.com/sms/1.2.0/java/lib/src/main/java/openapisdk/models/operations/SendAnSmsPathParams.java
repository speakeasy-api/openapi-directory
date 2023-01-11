package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendAnSmsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SendAnSmsFormatEnum format;
    public SendAnSmsPathParams withFormat(SendAnSmsFormatEnum format) {
        this.format = format;
        return this;
    }
}