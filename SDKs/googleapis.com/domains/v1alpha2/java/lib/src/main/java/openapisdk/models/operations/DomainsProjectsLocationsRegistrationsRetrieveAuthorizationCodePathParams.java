package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration")
    public String registration;
    public DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodePathParams withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}