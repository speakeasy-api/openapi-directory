package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}