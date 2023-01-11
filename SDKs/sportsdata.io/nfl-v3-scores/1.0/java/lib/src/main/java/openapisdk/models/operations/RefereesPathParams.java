package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RefereesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RefereesFormatEnum format;
    public RefereesPathParams withFormat(RefereesFormatEnum format) {
        this.format = format;
        return this;
    }
}