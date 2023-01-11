package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IamProjectsServiceAccountsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}