package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterOrganizationsSourcesFindingsGroupPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}