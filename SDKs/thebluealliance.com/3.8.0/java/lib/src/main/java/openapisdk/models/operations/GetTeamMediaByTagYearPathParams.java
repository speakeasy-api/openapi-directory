package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMediaByTagYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=media_tag")
    public String mediaTag;
    public GetTeamMediaByTagYearPathParams withMediaTag(String mediaTag) {
        this.mediaTag = mediaTag;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamMediaByTagYearPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetTeamMediaByTagYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}