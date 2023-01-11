package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesNodesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SasportalNodesNodesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}