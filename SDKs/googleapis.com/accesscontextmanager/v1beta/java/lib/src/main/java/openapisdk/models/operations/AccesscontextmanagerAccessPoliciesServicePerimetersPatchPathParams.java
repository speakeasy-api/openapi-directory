package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccesscontextmanagerAccessPoliciesServicePerimetersPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}