package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}