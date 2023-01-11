package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=X")
    public Long x;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withX(Long x) {
        this.x = x;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Y")
    public Long y;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withY(Long y) {
        this.y = y;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layer")
    public GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum layer;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withLayer(GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum layer) {
        this.layer = layer;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=style")
    public GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum style;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withStyle(GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum style) {
        this.style = style;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoom")
    public Long zoom;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams withZoom(Long zoom) {
        this.zoom = zoom;
        return this;
    }
}