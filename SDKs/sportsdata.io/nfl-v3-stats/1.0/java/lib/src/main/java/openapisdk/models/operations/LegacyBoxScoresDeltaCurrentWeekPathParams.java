package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LegacyBoxScoresDeltaCurrentWeekPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public LegacyBoxScoresDeltaCurrentWeekFormatEnum format;
    public LegacyBoxScoresDeltaCurrentWeekPathParams withFormat(LegacyBoxScoresDeltaCurrentWeekFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=minutes")
    public String minutes;
    public LegacyBoxScoresDeltaCurrentWeekPathParams withMinutes(String minutes) {
        this.minutes = minutes;
        return this;
    }
}