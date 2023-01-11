package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migratingVm")
    public String migratingVm;
    public VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationPathParams withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}