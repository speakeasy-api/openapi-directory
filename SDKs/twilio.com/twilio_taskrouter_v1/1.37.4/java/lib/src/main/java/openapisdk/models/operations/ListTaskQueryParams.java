package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssignmentStatus")
    public String[] assignmentStatus;
    public ListTaskQueryParams withAssignmentStatus(String[] assignmentStatus) {
        this.assignmentStatus = assignmentStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EvaluateTaskAttributes")
    public String evaluateTaskAttributes;
    public ListTaskQueryParams withEvaluateTaskAttributes(String evaluateTaskAttributes) {
        this.evaluateTaskAttributes = evaluateTaskAttributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HasAddons")
    public Boolean hasAddons;
    public ListTaskQueryParams withHasAddons(Boolean hasAddons) {
        this.hasAddons = hasAddons;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ordering")
    public String ordering;
    public ListTaskQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTaskQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Priority")
    public Long priority;
    public ListTaskQueryParams withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskQueueName")
    public String taskQueueName;
    public ListTaskQueryParams withTaskQueueName(String taskQueueName) {
        this.taskQueueName = taskQueueName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskQueueSid")
    public String taskQueueSid;
    public ListTaskQueryParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkflowName")
    public String workflowName;
    public ListTaskQueryParams withWorkflowName(String workflowName) {
        this.workflowName = workflowName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkflowSid")
    public String workflowSid;
    public ListTaskQueryParams withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
}