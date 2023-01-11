package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsViewOnlyLinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsViewOnlyLinksListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}