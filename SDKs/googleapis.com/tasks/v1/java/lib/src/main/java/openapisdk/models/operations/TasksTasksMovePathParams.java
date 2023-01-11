package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=task")
    public String task;
    public TasksTasksMovePathParams withTask(String task) {
        this.task = task;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksMovePathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}