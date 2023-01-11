package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerAccessPoliciesServicePerimetersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}