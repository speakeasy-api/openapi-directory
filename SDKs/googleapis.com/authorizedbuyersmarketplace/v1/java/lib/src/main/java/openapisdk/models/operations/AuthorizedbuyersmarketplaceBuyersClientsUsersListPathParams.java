package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}