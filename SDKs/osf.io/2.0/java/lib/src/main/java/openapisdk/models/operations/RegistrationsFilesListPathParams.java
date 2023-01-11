package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public String provider;
    public RegistrationsFilesListPathParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsFilesListPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}