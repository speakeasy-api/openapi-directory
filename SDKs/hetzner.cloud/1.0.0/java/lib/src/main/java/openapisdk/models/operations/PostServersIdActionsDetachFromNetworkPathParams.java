package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsDetachFromNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsDetachFromNetworkPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}