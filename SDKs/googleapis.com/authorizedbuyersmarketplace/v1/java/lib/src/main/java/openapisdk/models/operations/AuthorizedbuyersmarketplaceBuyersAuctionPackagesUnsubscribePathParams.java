package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribePathParams withName(String name) {
        this.name = name;
        return this;
    }
}