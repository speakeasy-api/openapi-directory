package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerOrganizationsListSecurityOption1 option1;
    public CloudresourcemanagerOrganizationsListSecurity withOption1(CloudresourcemanagerOrganizationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerOrganizationsListSecurityOption2 option2;
    public CloudresourcemanagerOrganizationsListSecurity withOption2(CloudresourcemanagerOrganizationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}