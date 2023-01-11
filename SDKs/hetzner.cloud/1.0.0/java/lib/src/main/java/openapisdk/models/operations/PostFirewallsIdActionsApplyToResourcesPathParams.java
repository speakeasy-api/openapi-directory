package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsIdActionsApplyToResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFirewallsIdActionsApplyToResourcesPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}