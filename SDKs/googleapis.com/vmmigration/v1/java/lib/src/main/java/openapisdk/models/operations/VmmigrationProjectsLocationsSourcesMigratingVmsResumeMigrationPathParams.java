package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migratingVm")
    public String migratingVm;
    public VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationPathParams withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}