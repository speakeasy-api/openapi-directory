package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}