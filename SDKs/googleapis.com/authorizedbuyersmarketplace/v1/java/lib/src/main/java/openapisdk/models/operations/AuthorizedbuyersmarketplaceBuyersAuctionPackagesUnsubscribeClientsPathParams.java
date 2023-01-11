package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=auctionPackage")
    public String auctionPackage;
    public AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsPathParams withAuctionPackage(String auctionPackage) {
        this.auctionPackage = auctionPackage;
        return this;
    }
}