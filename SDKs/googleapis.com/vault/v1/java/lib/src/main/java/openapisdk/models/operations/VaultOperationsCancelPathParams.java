package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VaultOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}