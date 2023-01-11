package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ProdTtSasportalNodesNodesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}