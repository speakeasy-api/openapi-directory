package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AuthorizedbuyersmarketplaceBuyersClientsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}