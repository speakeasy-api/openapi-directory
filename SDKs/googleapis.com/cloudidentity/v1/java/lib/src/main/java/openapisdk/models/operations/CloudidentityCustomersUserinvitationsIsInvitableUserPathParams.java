package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityCustomersUserinvitationsIsInvitableUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityCustomersUserinvitationsIsInvitableUserPathParams withName(String name) {
        this.name = name;
        return this;
    }
}