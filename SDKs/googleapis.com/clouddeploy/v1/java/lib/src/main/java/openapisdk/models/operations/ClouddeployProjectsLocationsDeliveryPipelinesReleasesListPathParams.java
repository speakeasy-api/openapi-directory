package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ClouddeployProjectsLocationsDeliveryPipelinesReleasesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}