package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsDeleteRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostNetworksIdActionsDeleteRoutePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}