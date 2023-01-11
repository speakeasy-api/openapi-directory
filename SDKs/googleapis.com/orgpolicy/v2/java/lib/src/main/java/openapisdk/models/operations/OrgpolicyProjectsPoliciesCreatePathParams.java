package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OrgpolicyProjectsPoliciesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}