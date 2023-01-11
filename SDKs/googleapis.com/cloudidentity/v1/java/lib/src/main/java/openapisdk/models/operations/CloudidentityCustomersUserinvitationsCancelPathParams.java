package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityCustomersUserinvitationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityCustomersUserinvitationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}