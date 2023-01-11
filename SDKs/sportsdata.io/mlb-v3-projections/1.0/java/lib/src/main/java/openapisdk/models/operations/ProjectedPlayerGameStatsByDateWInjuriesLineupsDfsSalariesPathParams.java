package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
}