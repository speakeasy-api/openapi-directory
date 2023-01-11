package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishAttractionVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PublishAttractionVideosPathParams withId(String id) {
        this.id = id;
        return this;
    }
}