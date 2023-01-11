package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rollout")
    public String rollout;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobPathParams withRollout(String rollout) {
        this.rollout = rollout;
        return this;
    }
}