package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMediaByTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=media_tag")
    public String mediaTag;
    public GetTeamMediaByTagPathParams withMediaTag(String mediaTag) {
        this.mediaTag = mediaTag;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_key")
    public String teamKey;
    public GetTeamMediaByTagPathParams withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
}