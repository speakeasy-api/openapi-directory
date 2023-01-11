package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CurrentSeasontypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CurrentSeasontypeFormatEnum format;
    public CurrentSeasontypePathParams withFormat(CurrentSeasontypeFormatEnum format) {
        this.format = format;
        return this;
    }
}