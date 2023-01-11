package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectedPlayerGameStatsByDateWDfsSalariesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public ProjectedPlayerGameStatsByDateWDfsSalariesPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum format;
    public ProjectedPlayerGameStatsByDateWDfsSalariesPathParams withFormat(ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum format) {
        this.format = format;
        return this;
    }
}