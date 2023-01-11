package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudbillingBillingAccountsGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}