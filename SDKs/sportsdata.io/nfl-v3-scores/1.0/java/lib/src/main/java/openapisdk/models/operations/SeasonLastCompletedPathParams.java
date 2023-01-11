package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonLastCompletedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SeasonLastCompletedFormatEnum format;
    public SeasonLastCompletedPathParams withFormat(SeasonLastCompletedFormatEnum format) {
        this.format = format;
        return this;
    }
}