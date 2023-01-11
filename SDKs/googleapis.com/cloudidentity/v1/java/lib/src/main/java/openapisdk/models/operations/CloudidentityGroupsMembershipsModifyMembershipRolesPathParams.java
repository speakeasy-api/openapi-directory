package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsModifyMembershipRolesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityGroupsMembershipsModifyMembershipRolesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}