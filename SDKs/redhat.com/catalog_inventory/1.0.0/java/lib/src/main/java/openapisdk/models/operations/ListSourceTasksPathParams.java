package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceTasksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListSourceTasksPathParams withId(String id) {
        this.id = id;
        return this;
    }
}