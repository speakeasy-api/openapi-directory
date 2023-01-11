package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamsAllFormatEnum format;
    public TeamsAllPathParams withFormat(TeamsAllFormatEnum format) {
        this.format = format;
        return this;
    }
}