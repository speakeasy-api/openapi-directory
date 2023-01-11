package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsInvitationsDeclinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsInvitationsDeclinePathParams withName(String name) {
        this.name = name;
        return this;
    }
}