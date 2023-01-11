package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByAvailablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByAvailableFormatEnum format;
    public PlayerDetailsByAvailablePathParams withFormat(PlayerDetailsByAvailableFormatEnum format) {
        this.format = format;
        return this;
    }
}