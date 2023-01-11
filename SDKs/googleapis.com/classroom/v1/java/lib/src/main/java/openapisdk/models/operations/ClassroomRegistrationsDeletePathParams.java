package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomRegistrationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registrationId")
    public String registrationId;
    public ClassroomRegistrationsDeletePathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}