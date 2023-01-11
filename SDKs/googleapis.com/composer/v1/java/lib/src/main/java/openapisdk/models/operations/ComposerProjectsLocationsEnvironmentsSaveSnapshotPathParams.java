package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment")
    public String environment;
    public ComposerProjectsLocationsEnvironmentsSaveSnapshotPathParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}