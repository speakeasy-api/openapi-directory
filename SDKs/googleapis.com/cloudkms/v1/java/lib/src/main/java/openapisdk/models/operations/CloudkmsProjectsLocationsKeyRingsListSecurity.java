package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsKeyRingsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudkmsProjectsLocationsKeyRingsListSecurityOption1 option1;
    public CloudkmsProjectsLocationsKeyRingsListSecurity withOption1(CloudkmsProjectsLocationsKeyRingsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudkmsProjectsLocationsKeyRingsListSecurityOption2 option2;
    public CloudkmsProjectsLocationsKeyRingsListSecurity withOption2(CloudkmsProjectsLocationsKeyRingsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}