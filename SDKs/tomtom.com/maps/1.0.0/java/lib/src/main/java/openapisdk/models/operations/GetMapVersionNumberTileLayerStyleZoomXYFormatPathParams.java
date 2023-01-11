package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=X")
    public Long x;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withX(Long x) {
        this.x = x;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Y")
    public Long y;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withY(Long y) {
        this.y = y;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum format;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withFormat(GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layer")
    public GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum layer;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withLayer(GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum layer) {
        this.layer = layer;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=style")
    public GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum style;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withStyle(GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum style) {
        this.style = style;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoom")
    public Long zoom;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams withZoom(Long zoom) {
        this.zoom = zoom;
        return this;
    }
}