package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsGuestPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsGuestPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}