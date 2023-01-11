package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingBillingAccountsProjectsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbillingBillingAccountsProjectsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}