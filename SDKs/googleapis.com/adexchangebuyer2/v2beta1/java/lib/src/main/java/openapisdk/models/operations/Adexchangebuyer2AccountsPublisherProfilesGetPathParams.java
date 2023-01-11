package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsPublisherProfilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public Adexchangebuyer2AccountsPublisherProfilesGetPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=publisherProfileId")
    public String publisherProfileId;
    public Adexchangebuyer2AccountsPublisherProfilesGetPathParams withPublisherProfileId(String publisherProfileId) {
        this.publisherProfileId = publisherProfileId;
        return this;
    }
}