package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsContributorsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsContributorsReadPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public RegistrationsContributorsReadPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}