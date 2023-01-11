package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribePathParams withName(String name) {
        this.name = name;
        return this;
    }
}