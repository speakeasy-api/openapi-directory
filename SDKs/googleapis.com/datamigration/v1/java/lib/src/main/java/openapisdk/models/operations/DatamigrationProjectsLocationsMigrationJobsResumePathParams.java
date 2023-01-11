package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatamigrationProjectsLocationsMigrationJobsResumePathParams withName(String name) {
        this.name = name;
        return this;
    }
}