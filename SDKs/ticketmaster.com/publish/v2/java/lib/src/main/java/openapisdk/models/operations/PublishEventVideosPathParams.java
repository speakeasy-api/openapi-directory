package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEventVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PublishEventVideosPathParams withId(String id) {
        this.id = id;
        return this;
    }
}