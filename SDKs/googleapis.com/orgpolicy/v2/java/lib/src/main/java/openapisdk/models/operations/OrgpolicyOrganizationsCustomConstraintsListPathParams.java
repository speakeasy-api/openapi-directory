package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyOrganizationsCustomConstraintsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OrgpolicyOrganizationsCustomConstraintsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}