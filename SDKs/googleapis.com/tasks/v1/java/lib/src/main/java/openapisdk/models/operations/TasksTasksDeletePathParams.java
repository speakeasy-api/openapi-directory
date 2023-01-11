package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task")
    public String task;
    public TasksTasksDeletePathParams withTask(String task) {
        this.task = task;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksDeletePathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}