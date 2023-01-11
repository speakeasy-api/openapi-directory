package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsChangeDnsPtrPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFloatingIpsIdActionsChangeDnsPtrPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}