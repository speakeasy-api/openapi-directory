package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FantasyPlayersWithAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public FantasyPlayersWithAdpFormatEnum format;
    public FantasyPlayersWithAdpPathParams withFormat(FantasyPlayersWithAdpFormatEnum format) {
        this.format = format;
        return this;
    }
}