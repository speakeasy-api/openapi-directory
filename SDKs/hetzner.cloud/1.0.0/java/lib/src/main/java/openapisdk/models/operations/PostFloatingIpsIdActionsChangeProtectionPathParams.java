package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFloatingIpsIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFloatingIpsIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}