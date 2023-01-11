package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InjuriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public InjuriesFormatEnum format;
    public InjuriesPathParams withFormat(InjuriesFormatEnum format) {
        this.format = format;
        return this;
    }
}