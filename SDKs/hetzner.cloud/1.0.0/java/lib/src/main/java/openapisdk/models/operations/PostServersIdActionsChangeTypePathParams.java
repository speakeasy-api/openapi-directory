package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsChangeTypePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}