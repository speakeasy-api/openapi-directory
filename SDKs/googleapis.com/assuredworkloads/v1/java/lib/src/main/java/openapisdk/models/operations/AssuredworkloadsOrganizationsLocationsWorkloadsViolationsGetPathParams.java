package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}