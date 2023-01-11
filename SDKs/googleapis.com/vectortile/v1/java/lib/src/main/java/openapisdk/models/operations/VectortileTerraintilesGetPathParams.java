package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VectortileTerraintilesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public VectortileTerraintilesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}