package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsLookupSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsLookupSecurityOption1 option1;
    public CloudidentityGroupsLookupSecurity withOption1(CloudidentityGroupsLookupSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsLookupSecurityOption2 option2;
    public CloudidentityGroupsLookupSecurity withOption2(CloudidentityGroupsLookupSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsLookupSecurityOption3 option3;
    public CloudidentityGroupsLookupSecurity withOption3(CloudidentityGroupsLookupSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}