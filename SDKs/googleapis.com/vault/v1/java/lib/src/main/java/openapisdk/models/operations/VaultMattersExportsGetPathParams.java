package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=exportId")
    public String exportId;
    public VaultMattersExportsGetPathParams withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersExportsGetPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}