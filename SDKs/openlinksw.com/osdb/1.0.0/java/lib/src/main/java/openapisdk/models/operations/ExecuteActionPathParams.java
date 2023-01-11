package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionId")
    public String actionId;
    public ExecuteActionPathParams withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceId")
    public String serviceId;
    public ExecuteActionPathParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}