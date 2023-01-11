package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudbillingBillingAccountsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}