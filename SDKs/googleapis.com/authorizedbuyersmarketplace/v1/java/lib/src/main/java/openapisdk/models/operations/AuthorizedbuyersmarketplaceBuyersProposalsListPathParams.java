package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AuthorizedbuyersmarketplaceBuyersProposalsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}