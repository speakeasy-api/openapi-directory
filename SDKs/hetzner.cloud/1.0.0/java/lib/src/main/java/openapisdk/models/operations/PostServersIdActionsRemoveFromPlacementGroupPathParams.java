package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsRemoveFromPlacementGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsRemoveFromPlacementGroupPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}