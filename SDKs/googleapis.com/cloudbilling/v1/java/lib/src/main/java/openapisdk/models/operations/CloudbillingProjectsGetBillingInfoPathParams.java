package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingProjectsGetBillingInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbillingProjectsGetBillingInfoPathParams withName(String name) {
        this.name = name;
        return this;
    }
}