package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersExportsListPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}