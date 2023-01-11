package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public AccesscontextmanagerAccessPoliciesServicePerimetersTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}