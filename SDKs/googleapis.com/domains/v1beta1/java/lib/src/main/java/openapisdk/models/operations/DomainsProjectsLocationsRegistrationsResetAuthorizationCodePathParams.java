package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration")
    public String registration;
    public DomainsProjectsLocationsRegistrationsResetAuthorizationCodePathParams withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}