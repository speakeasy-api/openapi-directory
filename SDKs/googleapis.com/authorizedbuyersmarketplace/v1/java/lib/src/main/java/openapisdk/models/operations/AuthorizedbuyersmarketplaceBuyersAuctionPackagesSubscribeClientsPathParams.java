package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=auctionPackage")
    public String auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsPathParams withAuctionPackage(String auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
}