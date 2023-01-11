package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsAddRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostNetworksIdActionsAddRoutePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}