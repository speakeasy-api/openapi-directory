package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public MetastoreProjectsLocationsServicesRemoveIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}