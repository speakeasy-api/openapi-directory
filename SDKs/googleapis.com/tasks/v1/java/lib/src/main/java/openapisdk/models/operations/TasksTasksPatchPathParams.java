package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task")
    public String task;
    public TasksTasksPatchPathParams withTask(String task) {
        this.task = task;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksPatchPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}