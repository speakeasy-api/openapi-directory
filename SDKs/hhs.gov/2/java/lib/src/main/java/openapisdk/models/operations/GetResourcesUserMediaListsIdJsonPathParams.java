package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesUserMediaListsIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesUserMediaListsIdJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}