package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdpFantasyPlayersWithAdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public IdpFantasyPlayersWithAdpFormatEnum format;
    public IdpFantasyPlayersWithAdpPathParams withFormat(IdpFantasyPlayersWithAdpFormatEnum format) {
        this.format = format;
        return this;
    }
}