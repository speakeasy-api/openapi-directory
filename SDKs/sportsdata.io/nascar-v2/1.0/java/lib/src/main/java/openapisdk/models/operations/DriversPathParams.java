package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriversPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DriversFormatEnum format;
    public DriversPathParams withFormat(DriversFormatEnum format) {
        this.format = format;
        return this;
    }
}