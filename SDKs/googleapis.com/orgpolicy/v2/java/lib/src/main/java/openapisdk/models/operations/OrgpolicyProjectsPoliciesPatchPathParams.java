package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OrgpolicyProjectsPoliciesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}