package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OrgpolicyProjectsPoliciesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}