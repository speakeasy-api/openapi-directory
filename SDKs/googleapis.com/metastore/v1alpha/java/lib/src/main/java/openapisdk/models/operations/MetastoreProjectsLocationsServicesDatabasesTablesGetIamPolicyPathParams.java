package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}