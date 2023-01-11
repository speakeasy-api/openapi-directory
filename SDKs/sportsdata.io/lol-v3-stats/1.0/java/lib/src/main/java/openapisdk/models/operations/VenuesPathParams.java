package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VenuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public VenuesFormatEnum format;
    public VenuesPathParams withFormat(VenuesFormatEnum format) {
        this.format = format;
        return this;
    }
}