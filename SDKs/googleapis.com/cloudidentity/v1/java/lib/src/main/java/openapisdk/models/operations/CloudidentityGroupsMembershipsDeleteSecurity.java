package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsMembershipsDeleteSecurityOption1 option1;
    public CloudidentityGroupsMembershipsDeleteSecurity withOption1(CloudidentityGroupsMembershipsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsMembershipsDeleteSecurityOption2 option2;
    public CloudidentityGroupsMembershipsDeleteSecurity withOption2(CloudidentityGroupsMembershipsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}