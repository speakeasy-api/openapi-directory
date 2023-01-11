package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerProjectsSearchSecurityOption1 option1;
    public CloudresourcemanagerProjectsSearchSecurity withOption1(CloudresourcemanagerProjectsSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerProjectsSearchSecurityOption2 option2;
    public CloudresourcemanagerProjectsSearchSecurity withOption2(CloudresourcemanagerProjectsSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}