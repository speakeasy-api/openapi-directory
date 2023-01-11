package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VaultOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}