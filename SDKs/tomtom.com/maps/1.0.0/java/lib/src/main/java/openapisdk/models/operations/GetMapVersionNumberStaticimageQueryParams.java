package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberStaticimageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetMapVersionNumberStaticimageQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=center")
    public String center;
    public GetMapVersionNumberStaticimageQueryParams withCenter(String center) {
        this.center = center;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetMapVersionNumberStaticimageFormatEnum format;
    public GetMapVersionNumberStaticimageQueryParams withFormat(GetMapVersionNumberStaticimageFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Long height;
    public GetMapVersionNumberStaticimageQueryParams withHeight(Long height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=layer")
    public GetMapVersionNumberStaticimageLayerEnum layer;
    public GetMapVersionNumberStaticimageQueryParams withLayer(GetMapVersionNumberStaticimageLayerEnum layer) {
        this.layer = layer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=style")
    public GetMapVersionNumberStaticimageStyleEnum style;
    public GetMapVersionNumberStaticimageQueryParams withStyle(GetMapVersionNumberStaticimageStyleEnum style) {
        this.style = style;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public GetMapVersionNumberStaticimageViewEnum view;
    public GetMapVersionNumberStaticimageQueryParams withView(GetMapVersionNumberStaticimageViewEnum view) {
        this.view = view;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public GetMapVersionNumberStaticimageQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zoom")
    public Long zoom;
    public GetMapVersionNumberStaticimageQueryParams withZoom(Long zoom) {
        this.zoom = zoom;
        return this;
    }
}