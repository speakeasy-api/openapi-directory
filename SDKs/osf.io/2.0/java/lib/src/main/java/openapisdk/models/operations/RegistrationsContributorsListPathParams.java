package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsContributorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsContributorsListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}