package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFirewallsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutFirewallsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}