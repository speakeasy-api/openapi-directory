package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task")
    public String task;
    public TasksTasksGetPathParams withTask(String task) {
        this.task = task;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksGetPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}