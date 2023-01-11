package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=privateAuctionId")
    public String privateAuctionId;
    public AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams withPrivateAuctionId(String privateAuctionId) {
        this.privateAuctionId = privateAuctionId;
        return this;
    }
}