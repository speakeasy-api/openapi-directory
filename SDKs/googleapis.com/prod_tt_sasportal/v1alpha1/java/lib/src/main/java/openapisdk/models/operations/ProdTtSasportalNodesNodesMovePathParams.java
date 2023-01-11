package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProdTtSasportalNodesNodesMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ProdTtSasportalNodesNodesMovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}