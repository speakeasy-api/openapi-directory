package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsProvidersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsProvidersListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}