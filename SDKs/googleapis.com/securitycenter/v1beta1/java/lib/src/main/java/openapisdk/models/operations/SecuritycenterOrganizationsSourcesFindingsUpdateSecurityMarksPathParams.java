package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksPathParams withName(String name) {
        this.name = name;
        return this;
    }
}