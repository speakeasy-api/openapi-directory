package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesTwitchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GamesTwitchReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}