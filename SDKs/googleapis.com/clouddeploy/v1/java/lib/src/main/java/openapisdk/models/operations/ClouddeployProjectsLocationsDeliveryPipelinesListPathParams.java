package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ClouddeployProjectsLocationsDeliveryPipelinesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}