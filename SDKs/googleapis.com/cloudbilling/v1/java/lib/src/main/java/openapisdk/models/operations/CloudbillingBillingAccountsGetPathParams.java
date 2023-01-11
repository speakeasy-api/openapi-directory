package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbillingBillingAccountsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}