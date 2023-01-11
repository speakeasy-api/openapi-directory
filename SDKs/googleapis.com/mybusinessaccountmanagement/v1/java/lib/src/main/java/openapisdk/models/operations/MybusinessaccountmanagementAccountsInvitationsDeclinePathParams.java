package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsInvitationsDeclinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessaccountmanagementAccountsInvitationsDeclinePathParams withName(String name) {
        this.name = name;
        return this;
    }
}