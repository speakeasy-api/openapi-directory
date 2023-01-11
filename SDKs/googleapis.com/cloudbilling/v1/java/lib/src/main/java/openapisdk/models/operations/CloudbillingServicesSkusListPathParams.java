package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbillingServicesSkusListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudbillingServicesSkusListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}