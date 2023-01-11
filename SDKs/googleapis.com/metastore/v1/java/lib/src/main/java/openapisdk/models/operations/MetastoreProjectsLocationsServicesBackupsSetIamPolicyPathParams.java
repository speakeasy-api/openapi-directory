package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}