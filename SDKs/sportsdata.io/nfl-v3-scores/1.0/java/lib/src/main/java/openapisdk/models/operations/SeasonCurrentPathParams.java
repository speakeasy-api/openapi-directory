package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonCurrentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SeasonCurrentFormatEnum format;
    public SeasonCurrentPathParams withFormat(SeasonCurrentFormatEnum format) {
        this.format = format;
        return this;
    }
}