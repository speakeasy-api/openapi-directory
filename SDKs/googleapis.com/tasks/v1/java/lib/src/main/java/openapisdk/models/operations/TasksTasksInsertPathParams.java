package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksInsertPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}