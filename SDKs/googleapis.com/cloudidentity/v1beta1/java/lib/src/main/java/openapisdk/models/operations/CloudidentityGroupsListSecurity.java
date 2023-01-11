package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsListSecurityOption1 option1;
    public CloudidentityGroupsListSecurity withOption1(CloudidentityGroupsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsListSecurityOption2 option2;
    public CloudidentityGroupsListSecurity withOption2(CloudidentityGroupsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsListSecurityOption3 option3;
    public CloudidentityGroupsListSecurity withOption3(CloudidentityGroupsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}