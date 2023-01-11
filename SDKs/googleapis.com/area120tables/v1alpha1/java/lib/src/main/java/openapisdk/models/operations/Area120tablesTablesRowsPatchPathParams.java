package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesTablesRowsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public Area120tablesTablesRowsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}