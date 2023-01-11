package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}