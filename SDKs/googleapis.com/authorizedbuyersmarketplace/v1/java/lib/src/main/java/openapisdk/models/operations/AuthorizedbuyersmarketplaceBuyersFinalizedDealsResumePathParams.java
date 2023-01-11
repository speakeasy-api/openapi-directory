package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumePathParams withName(String name) {
        this.name = name;
        return this;
    }
}