package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration")
    public String registration;
    public DomainsProjectsLocationsRegistrationsConfigureDnsSettingsPathParams withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}