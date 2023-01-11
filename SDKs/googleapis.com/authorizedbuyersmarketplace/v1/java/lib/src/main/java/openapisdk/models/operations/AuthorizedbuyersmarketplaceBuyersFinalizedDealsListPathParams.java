package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}