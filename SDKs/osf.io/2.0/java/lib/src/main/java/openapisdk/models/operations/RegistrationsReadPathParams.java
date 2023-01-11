package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsReadPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}