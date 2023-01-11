package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudkmsProjectsLocationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudkmsProjectsLocationsListSecurityOption1 option1;
    public CloudkmsProjectsLocationsListSecurity withOption1(CloudkmsProjectsLocationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudkmsProjectsLocationsListSecurityOption2 option2;
    public CloudkmsProjectsLocationsListSecurity withOption2(CloudkmsProjectsLocationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}