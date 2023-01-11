package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}