package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksTasklistsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public TasksTasklistsGetSecurityOption1 option1;
    public TasksTasklistsGetSecurity withOption1(TasksTasklistsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public TasksTasklistsGetSecurityOption2 option2;
    public TasksTasklistsGetSecurity withOption2(TasksTasklistsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}