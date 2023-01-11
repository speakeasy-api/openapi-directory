package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistrationsCitationReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=citation_id")
    public String citationId;
    public RegistrationsCitationReadPathParams withCitationId(String citationId) {
        this.citationId = citationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration_id")
    public String registrationId;
    public RegistrationsCitationReadPathParams withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}