package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamsActiveFormatEnum format;
    public TeamsActivePathParams withFormat(TeamsActiveFormatEnum format) {
        this.format = format;
        return this;
    }
}