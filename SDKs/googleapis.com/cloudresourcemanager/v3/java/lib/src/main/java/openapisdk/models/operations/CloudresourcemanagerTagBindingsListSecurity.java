package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagBindingsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagBindingsListSecurityOption1 option1;
    public CloudresourcemanagerTagBindingsListSecurity withOption1(CloudresourcemanagerTagBindingsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudresourcemanagerTagBindingsListSecurityOption2 option2;
    public CloudresourcemanagerTagBindingsListSecurity withOption2(CloudresourcemanagerTagBindingsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}