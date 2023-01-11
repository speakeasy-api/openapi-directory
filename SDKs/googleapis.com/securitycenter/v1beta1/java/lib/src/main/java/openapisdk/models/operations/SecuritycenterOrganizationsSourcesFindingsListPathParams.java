package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterOrganizationsSourcesFindingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}