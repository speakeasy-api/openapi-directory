package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyOrganizationsCustomConstraintsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OrgpolicyOrganizationsCustomConstraintsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}