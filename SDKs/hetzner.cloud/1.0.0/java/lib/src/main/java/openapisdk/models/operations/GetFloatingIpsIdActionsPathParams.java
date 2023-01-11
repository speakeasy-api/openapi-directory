package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpsIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetFloatingIpsIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}