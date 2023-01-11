package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migrationJob")
    public String migrationJob;
    public DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptPathParams withMigrationJob(String migrationJob) {
        this.migrationJob = migrationJob;
        return this;
    }
}