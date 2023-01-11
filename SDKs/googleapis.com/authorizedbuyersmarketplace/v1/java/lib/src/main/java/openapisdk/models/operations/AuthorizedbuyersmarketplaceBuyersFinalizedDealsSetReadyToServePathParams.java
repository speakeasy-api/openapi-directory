package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deal")
    public String deal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams withDeal(String deal) {
        this.deal = deal;
        return this;
    }
}