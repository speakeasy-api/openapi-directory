package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsInstitutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsInstitutionsListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}