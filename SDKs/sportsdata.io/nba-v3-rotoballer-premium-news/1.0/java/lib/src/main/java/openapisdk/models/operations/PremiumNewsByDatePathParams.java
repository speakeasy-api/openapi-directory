package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PremiumNewsByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public PremiumNewsByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public PremiumNewsByDateFormatEnum format;
    public PremiumNewsByDatePathParams withFormat(PremiumNewsByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}