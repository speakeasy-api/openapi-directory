package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task")
    public String task;
    public TasksTasksUpdatePathParams withTask(String task) {
        this.task = task;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksUpdatePathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}