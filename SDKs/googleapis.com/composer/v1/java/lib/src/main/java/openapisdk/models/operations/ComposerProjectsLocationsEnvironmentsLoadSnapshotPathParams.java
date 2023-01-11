package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment")
    public String environment;
    public ComposerProjectsLocationsEnvironmentsLoadSnapshotPathParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}