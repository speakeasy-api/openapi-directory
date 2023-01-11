package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=buyer")
    public String buyer;
    public AuthorizedbuyersmarketplaceBuyersProposalsSendRfpPathParams withBuyer(String buyer) {
        this.buyer = buyer;
        return this;
    }
}