package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MetastoreOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}