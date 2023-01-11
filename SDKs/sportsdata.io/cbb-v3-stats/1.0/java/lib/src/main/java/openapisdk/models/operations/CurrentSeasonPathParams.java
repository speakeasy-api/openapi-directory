package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CurrentSeasonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CurrentSeasonFormatEnum format;
    public CurrentSeasonPathParams withFormat(CurrentSeasonFormatEnum format) {
        this.format = format;
        return this;
    }
}