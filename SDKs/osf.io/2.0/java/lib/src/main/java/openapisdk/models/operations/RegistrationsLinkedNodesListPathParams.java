package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsLinkedNodesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsLinkedNodesListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}