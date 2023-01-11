package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsStartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatamigrationProjectsLocationsMigrationJobsStartPathParams withName(String name) {
        this.name = name;
        return this;
    }
}