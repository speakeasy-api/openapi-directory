package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsMembershipsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityGroupsMembershipsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}