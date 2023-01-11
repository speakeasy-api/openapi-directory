package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerAccessPoliciesAccessLevelsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}