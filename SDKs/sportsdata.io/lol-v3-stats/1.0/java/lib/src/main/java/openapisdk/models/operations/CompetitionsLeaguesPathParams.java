package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompetitionsLeaguesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CompetitionsLeaguesFormatEnum format;
    public CompetitionsLeaguesPathParams withFormat(CompetitionsLeaguesFormatEnum format) {
        this.format = format;
        return this;
    }
}