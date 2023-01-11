package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlayerDetailsByActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PlayerDetailsByActiveFormatEnum format;
    public PlayerDetailsByActivePathParams withFormat(PlayerDetailsByActiveFormatEnum format) {
        this.format = format;
        return this;
    }
}