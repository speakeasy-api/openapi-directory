package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment")
    public String environment;
    public ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}