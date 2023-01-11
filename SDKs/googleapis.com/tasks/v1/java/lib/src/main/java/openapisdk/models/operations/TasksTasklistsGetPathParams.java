package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasklistsGetPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}