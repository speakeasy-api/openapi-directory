package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomersAccountAnnouncementsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account")
    public Long account;
    public GetCustomersAccountAnnouncementsPathParams withAccount(Long account) {
        this.account = account;
        return this;
    }
}