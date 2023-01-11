package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StadiumsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public StadiumsFormatEnum format;
    public StadiumsPathParams withFormat(StadiumsFormatEnum format) {
        this.format = format;
        return this;
    }
}