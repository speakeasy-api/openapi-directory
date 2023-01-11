package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesDevicesUpdateSignedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ProdTtSasportalNodesDevicesUpdateSignedPathParams withName(String name) {
        this.name = name;
        return this;
    }
}