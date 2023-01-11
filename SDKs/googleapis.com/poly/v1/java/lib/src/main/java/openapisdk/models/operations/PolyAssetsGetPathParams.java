package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolyAssetsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PolyAssetsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}