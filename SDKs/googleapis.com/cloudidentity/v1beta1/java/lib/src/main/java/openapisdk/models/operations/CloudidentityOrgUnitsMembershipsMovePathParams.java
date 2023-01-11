package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityOrgUnitsMembershipsMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudidentityOrgUnitsMembershipsMovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}