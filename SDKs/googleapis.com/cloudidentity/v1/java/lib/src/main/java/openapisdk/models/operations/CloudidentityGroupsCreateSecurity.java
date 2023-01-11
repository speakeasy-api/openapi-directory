package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsCreateSecurityOption1 option1;
    public CloudidentityGroupsCreateSecurity withOption1(CloudidentityGroupsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsCreateSecurityOption2 option2;
    public CloudidentityGroupsCreateSecurity withOption2(CloudidentityGroupsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}