package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsPromotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatamigrationProjectsLocationsMigrationJobsPromotePathParams withName(String name) {
        this.name = name;
        return this;
    }
}