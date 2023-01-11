package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}