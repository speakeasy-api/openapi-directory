package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChampionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ChampionsFormatEnum format;
    public ChampionsPathParams withFormat(ChampionsFormatEnum format) {
        this.format = format;
        return this;
    }
}