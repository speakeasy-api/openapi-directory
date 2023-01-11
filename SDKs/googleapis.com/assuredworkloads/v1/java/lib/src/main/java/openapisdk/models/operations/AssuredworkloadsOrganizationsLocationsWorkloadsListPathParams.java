package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AssuredworkloadsOrganizationsLocationsWorkloadsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}