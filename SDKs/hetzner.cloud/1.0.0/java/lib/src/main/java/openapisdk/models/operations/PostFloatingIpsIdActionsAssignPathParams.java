package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsAssignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFloatingIpsIdActionsAssignPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}