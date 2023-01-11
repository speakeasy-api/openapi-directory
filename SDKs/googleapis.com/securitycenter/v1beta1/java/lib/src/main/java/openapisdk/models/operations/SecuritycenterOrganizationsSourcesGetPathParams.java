package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterOrganizationsSourcesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}