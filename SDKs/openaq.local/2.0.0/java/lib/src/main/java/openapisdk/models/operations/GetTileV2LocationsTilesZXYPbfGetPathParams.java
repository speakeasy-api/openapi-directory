package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTileV2LocationsTilesZXYPbfGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=x")
    public Long x;
    public GetTileV2LocationsTilesZXYPbfGetPathParams withX(Long x) {
        this.x = x;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=y")
    public Long y;
    public GetTileV2LocationsTilesZXYPbfGetPathParams withY(Long y) {
        this.y = y;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=z")
    public Long z;
    public GetTileV2LocationsTilesZXYPbfGetPathParams withZ(Long z) {
        this.z = z;
        return this;
    }
}