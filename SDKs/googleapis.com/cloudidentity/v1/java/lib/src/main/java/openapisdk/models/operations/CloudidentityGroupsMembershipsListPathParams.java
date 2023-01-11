package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityGroupsMembershipsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}