package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsForksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsForksListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}