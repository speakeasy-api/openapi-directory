package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsCommentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsCommentsListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}