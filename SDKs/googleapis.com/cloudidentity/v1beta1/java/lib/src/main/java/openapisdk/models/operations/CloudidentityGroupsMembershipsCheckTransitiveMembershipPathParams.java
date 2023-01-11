package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}