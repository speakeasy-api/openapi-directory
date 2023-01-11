package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsVerifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatamigrationProjectsLocationsMigrationJobsVerifyPathParams withName(String name) {
        this.name = name;
        return this;
    }
}