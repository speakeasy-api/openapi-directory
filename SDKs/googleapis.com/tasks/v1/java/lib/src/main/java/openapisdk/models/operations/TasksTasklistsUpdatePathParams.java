package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasklistsUpdatePathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}