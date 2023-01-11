package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}