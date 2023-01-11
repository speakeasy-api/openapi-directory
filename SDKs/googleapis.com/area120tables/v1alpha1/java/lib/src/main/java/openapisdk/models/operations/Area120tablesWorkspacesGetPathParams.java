package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Area120tablesWorkspacesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public Area120tablesWorkspacesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}