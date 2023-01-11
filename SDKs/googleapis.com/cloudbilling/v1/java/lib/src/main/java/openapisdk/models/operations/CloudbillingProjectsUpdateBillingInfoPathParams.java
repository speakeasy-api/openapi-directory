package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingProjectsUpdateBillingInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudbillingProjectsUpdateBillingInfoPathParams withName(String name) {
        this.name = name;
        return this;
    }
}