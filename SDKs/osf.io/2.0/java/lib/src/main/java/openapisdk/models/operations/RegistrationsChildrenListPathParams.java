package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsChildrenListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsChildrenListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}