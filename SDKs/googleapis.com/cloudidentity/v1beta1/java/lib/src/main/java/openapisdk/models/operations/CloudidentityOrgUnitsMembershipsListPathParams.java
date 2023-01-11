package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityOrgUnitsMembershipsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityOrgUnitsMembershipsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}