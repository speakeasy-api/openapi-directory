package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public TeamsFormatEnum format;
    public TeamsPathParams withFormat(TeamsFormatEnum format) {
        this.format = format;
        return this;
    }
}