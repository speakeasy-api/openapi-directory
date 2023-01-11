package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsPausePathParams withName(String name) {
        this.name = name;
        return this;
    }
}