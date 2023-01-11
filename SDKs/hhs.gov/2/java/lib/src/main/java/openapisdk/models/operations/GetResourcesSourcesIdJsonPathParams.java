package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesSourcesIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesSourcesIdJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}