package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatamigrationProjectsLocationsMigrationJobsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}