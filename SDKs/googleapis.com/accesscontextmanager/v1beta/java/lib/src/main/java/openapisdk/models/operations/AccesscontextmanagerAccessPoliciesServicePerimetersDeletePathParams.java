package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccesscontextmanagerAccessPoliciesServicePerimetersDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}