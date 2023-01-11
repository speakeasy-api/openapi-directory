package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GamesAchievementsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}