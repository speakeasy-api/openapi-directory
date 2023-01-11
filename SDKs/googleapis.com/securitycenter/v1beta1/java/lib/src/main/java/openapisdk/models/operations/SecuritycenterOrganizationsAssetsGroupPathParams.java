package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsAssetsGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterOrganizationsAssetsGroupPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}