package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsForksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsForksCreatePathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}