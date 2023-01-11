package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsModifyMembershipRolesSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1 option1;
    public CloudidentityGroupsMembershipsModifyMembershipRolesSecurity withOption1(CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2 option2;
    public CloudidentityGroupsMembershipsModifyMembershipRolesSecurity withOption2(CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}