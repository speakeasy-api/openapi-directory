package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsDeleteSubnetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostNetworksIdActionsDeleteSubnetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}