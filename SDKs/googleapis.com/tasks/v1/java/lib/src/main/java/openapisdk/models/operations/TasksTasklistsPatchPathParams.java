package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tasklist")
    public String tasklist;
    public TasksTasklistsPatchPathParams withTasklist(String tasklist) {
        this.tasklist = tasklist;
        return this;
    }
}