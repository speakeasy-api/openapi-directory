package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesMediaIdJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}