package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesGetEffectivePolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OrgpolicyProjectsPoliciesGetEffectivePolicyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}