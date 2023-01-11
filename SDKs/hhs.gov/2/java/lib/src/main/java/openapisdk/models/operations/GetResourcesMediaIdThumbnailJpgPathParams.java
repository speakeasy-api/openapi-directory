package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdThumbnailJpgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesMediaIdThumbnailJpgPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}