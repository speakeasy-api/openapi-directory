package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IamProjectsServiceAccountsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}