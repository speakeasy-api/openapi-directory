package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsUnassignPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFloatingIpsIdActionsUnassignPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}