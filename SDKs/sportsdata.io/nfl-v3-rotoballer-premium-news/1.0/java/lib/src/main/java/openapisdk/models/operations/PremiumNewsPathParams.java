package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PremiumNewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PremiumNewsFormatEnum format;
    public PremiumNewsPathParams withFormat(PremiumNewsFormatEnum format) {
        this.format = format;
        return this;
    }
}