package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudbillingBillingAccountsTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}