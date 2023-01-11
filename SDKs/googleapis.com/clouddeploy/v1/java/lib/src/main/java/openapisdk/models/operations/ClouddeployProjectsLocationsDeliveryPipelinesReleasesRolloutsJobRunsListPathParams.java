package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}