package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsInvitationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessaccountmanagementAccountsInvitationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}