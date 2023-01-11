package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByFreeAgentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByFreeAgentsFormatEnum format;
    public PlayerDetailsByFreeAgentsPathParams withFormat(PlayerDetailsByFreeAgentsFormatEnum format) {
        this.format = format;
        return this;
    }
}