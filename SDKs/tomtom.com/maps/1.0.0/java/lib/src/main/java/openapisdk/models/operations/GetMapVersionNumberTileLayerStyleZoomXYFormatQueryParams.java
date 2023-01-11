package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tileSize")
    public Long tileSize;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams withTileSize(Long tileSize) {
        this.tileSize = tileSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum view;
    public GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams withView(GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum view) {
        this.view = view;
        return this;
    }
}