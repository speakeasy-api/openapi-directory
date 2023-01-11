package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasehostingOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}