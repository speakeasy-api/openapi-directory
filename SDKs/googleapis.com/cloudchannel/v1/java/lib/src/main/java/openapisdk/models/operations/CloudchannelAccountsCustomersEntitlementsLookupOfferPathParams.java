package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelAccountsCustomersEntitlementsLookupOfferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entitlement")
    public String entitlement;
    public CloudchannelAccountsCustomersEntitlementsLookupOfferPathParams withEntitlement(String entitlement) {
        this.entitlement = entitlement;
        return this;
    }
}