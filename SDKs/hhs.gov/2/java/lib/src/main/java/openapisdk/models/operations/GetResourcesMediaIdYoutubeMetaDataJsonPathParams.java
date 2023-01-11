package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdYoutubeMetaDataJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesMediaIdYoutubeMetaDataJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}