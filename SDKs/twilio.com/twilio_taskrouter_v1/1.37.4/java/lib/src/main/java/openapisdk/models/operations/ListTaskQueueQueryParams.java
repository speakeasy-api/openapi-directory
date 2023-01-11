package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EvaluateWorkerAttributes")
    public String evaluateWorkerAttributes;
    public ListTaskQueueQueryParams withEvaluateWorkerAttributes(String evaluateWorkerAttributes) {
        this.evaluateWorkerAttributes = evaluateWorkerAttributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListTaskQueueQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ordering")
    public String ordering;
    public ListTaskQueueQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTaskQueueQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkerSid")
    public String workerSid;
    public ListTaskQueueQueryParams withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
}