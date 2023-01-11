package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasklistsDeletePathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}