package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesRedditReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GamesRedditReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}