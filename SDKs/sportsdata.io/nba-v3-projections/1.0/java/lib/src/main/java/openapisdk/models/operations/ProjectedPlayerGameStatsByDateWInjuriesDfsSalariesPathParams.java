package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
}