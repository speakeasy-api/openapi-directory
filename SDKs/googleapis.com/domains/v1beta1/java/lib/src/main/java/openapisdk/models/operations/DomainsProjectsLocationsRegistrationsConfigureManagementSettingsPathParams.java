package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registration")
    public String registration;
    public DomainsProjectsLocationsRegistrationsConfigureManagementSettingsPathParams withRegistration(String registration) {
        this.registration = registration;
        return this;
    }
}