package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsWikisListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsWikisListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}