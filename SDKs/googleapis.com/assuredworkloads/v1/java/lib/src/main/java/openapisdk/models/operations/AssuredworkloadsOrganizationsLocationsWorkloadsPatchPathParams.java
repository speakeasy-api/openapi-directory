package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}