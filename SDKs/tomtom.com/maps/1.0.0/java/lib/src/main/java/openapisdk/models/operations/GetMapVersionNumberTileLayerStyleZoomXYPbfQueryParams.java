package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum view;
    public GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams withView(GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum view) {
        this.view = view;
        return this;
    }
}