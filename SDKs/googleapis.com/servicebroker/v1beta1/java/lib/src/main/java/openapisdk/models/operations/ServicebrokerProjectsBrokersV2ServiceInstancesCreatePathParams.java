package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance_id")
    public String instanceId;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ServicebrokerProjectsBrokersV2ServiceInstancesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}