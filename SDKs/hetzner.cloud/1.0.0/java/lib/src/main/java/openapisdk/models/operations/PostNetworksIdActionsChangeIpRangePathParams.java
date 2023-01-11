package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsChangeIpRangePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostNetworksIdActionsChangeIpRangePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}