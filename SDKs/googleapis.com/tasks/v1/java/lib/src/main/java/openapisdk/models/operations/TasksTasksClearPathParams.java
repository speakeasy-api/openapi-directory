package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasksClearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasksClearPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}