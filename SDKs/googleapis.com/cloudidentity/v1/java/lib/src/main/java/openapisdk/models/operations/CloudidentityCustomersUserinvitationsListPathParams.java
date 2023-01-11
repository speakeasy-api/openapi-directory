package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityCustomersUserinvitationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityCustomersUserinvitationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}