package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasehostingOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}