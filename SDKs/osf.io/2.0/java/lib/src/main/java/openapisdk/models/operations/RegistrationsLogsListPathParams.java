package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsLogsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsLogsListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}