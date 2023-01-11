package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsInvitationsAcceptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsInvitationsAcceptPathParams withName(String name) {
        this.name = name;
        return this;
    }
}