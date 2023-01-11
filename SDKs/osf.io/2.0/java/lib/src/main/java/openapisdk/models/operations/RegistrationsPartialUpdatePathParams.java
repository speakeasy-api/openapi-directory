package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsPartialUpdatePathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}