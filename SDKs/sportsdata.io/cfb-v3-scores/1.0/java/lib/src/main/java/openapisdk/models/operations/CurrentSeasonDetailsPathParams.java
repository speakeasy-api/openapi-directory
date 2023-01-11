package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CurrentSeasonDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CurrentSeasonDetailsFormatEnum format;
    public CurrentSeasonDetailsPathParams withFormat(CurrentSeasonDetailsFormatEnum format) {
        this.format = format;
        return this;
    }
}