package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssuredworkloadsOrganizationsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AssuredworkloadsOrganizationsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}