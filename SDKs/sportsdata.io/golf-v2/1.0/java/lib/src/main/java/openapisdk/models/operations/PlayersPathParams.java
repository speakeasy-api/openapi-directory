package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayersFormatEnum format;
    public PlayersPathParams withFormat(PlayersFormatEnum format) {
        this.format = format;
        return this;
    }
}