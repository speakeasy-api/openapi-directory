package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migratingVm")
    public String migratingVm;
    public VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationPathParams withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}