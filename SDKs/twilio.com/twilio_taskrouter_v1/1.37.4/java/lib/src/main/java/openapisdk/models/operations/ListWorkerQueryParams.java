package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActivityName")
    public String activityName;
    public ListWorkerQueryParams withActivityName(String activityName) {
        this.activityName = activityName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActivitySid")
    public String activitySid;
    public ListWorkerQueryParams withActivitySid(String activitySid) {
        this.activitySid = activitySid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Available")
    public String available;
    public ListWorkerQueryParams withAvailable(String available) {
        this.available = available;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListWorkerQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ordering")
    public String ordering;
    public ListWorkerQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWorkerQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetWorkersExpression")
    public String targetWorkersExpression;
    public ListWorkerQueryParams withTargetWorkersExpression(String targetWorkersExpression) {
        this.targetWorkersExpression = targetWorkersExpression;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskQueueName")
    public String taskQueueName;
    public ListWorkerQueryParams withTaskQueueName(String taskQueueName) {
        this.taskQueueName = taskQueueName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskQueueSid")
    public String taskQueueSid;
    public ListWorkerQueryParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
}