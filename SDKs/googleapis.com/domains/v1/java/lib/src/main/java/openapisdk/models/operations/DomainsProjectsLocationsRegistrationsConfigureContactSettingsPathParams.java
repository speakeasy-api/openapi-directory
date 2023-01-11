package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration")
    public String registration;
    public DomainsProjectsLocationsRegistrationsConfigureContactSettingsPathParams withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}