package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsIdentifiersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsIdentifiersListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}