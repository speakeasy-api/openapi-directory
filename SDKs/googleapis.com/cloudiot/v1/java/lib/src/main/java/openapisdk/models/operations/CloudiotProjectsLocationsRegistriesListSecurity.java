package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudiotProjectsLocationsRegistriesListSecurityOption1 option1;
    public CloudiotProjectsLocationsRegistriesListSecurity withOption1(CloudiotProjectsLocationsRegistriesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudiotProjectsLocationsRegistriesListSecurityOption2 option2;
    public CloudiotProjectsLocationsRegistriesListSecurity withOption2(CloudiotProjectsLocationsRegistriesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}