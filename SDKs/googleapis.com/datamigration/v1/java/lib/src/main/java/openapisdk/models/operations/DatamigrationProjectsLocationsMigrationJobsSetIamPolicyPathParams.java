package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}