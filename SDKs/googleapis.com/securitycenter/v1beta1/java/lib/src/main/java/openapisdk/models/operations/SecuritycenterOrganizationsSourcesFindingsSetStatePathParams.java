package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsSetStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterOrganizationsSourcesFindingsSetStatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}