package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerAccessPoliciesServicePerimetersReplaceAllPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}