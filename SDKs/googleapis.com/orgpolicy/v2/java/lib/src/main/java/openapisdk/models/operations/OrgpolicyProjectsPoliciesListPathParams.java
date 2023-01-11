package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OrgpolicyProjectsPoliciesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}