package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deal")
    public String deal;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams withDeal(String deal) {
        this.deal = deal;
        return this;
    }
}