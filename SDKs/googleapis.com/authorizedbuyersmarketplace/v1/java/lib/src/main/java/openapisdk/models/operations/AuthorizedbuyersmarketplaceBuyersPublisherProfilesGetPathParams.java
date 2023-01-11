package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}