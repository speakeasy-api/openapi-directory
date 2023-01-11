package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerOrganizationsSearchSecurityOption1 option1;
    public CloudresourcemanagerOrganizationsSearchSecurity withOption1(CloudresourcemanagerOrganizationsSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerOrganizationsSearchSecurityOption2 option2;
    public CloudresourcemanagerOrganizationsSearchSecurity withOption2(CloudresourcemanagerOrganizationsSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}