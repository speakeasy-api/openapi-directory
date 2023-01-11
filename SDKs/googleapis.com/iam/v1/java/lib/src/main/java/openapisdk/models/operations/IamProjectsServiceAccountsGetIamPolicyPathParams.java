package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsServiceAccountsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public IamProjectsServiceAccountsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}