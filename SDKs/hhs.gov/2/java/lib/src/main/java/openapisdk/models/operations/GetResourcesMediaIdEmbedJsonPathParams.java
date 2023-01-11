package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdEmbedJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesMediaIdEmbedJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}