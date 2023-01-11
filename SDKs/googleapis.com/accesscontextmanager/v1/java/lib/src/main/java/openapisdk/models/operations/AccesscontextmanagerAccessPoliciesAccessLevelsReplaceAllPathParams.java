package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerAccessPoliciesAccessLevelsReplaceAllPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}