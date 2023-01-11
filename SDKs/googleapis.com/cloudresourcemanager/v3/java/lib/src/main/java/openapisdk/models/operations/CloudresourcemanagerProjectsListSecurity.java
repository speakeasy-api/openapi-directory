package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerProjectsListSecurityOption1 option1;
    public CloudresourcemanagerProjectsListSecurity withOption1(CloudresourcemanagerProjectsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerProjectsListSecurityOption2 option2;
    public CloudresourcemanagerProjectsListSecurity withOption2(CloudresourcemanagerProjectsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}