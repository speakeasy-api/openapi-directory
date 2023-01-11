package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesYoutubeReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GamesYoutubeReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}