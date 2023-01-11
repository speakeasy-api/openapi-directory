package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migratingVm")
    public String migratingVm;
    public VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationPathParams withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}