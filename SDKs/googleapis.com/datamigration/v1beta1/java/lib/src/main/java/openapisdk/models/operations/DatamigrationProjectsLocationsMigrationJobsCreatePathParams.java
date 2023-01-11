package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatamigrationProjectsLocationsMigrationJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}