package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DailyFantasyScoringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public DailyFantasyScoringPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DailyFantasyScoringFormatEnum format;
    public DailyFantasyScoringPathParams withFormat(DailyFantasyScoringFormatEnum format) {
        this.format = format;
        return this;
    }
}