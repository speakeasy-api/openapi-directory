package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}