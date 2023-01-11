package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFirewallsIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetFirewallsIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}