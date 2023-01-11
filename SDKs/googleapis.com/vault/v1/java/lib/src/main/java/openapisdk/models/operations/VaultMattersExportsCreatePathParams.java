package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersExportsCreatePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}