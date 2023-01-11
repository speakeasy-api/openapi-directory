package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=exportId")
    public String exportId;
    public VaultMattersExportsDeletePathParams withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersExportsDeletePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}