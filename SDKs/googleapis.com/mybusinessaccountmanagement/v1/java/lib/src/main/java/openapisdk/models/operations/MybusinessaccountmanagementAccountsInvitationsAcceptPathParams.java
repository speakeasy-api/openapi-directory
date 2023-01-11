package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsInvitationsAcceptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessaccountmanagementAccountsInvitationsAcceptPathParams withName(String name) {
        this.name = name;
        return this;
    }
}