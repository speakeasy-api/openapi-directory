package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePodcastByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeletePodcastByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}