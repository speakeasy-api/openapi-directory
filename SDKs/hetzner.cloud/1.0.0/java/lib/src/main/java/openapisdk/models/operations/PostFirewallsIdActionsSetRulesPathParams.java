package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFirewallsIdActionsSetRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostFirewallsIdActionsSetRulesPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}