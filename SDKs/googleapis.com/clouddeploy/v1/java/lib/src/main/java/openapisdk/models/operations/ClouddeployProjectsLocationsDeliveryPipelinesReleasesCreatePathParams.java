package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}