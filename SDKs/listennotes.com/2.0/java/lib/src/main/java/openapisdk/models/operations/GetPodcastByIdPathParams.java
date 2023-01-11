package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPodcastByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}