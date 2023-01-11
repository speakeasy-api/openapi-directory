package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudchannelAccountsCustomersEntitlementsChangeOfferPathParams withName(String name) {
        this.name = name;
        return this;
    }
}