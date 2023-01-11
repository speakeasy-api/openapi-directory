package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}