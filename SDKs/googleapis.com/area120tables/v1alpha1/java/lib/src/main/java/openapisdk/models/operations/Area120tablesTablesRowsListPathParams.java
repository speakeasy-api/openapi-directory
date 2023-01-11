package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public Area120tablesTablesRowsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}