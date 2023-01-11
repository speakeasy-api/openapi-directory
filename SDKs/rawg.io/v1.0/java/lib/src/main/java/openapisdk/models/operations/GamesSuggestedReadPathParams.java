package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesSuggestedReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GamesSuggestedReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}