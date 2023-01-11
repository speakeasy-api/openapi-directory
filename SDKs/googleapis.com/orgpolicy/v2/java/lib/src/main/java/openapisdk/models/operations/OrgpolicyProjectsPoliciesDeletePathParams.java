package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OrgpolicyProjectsPoliciesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}