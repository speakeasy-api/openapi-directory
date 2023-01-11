package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetMapQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetMapFormatEnum format;
    public GetMapQueryParams withFormat(GetMapFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Long height;
    public GetMapQueryParams withHeight(Long height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=layers")
    public GetMapLayersEnum layers;
    public GetMapQueryParams withLayers(GetMapLayersEnum layers) {
        this.layers = layers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request")
    public GetMapRequestEnum request;
    public GetMapQueryParams withRequest(GetMapRequestEnum request) {
        this.request = request;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=service")
    public GetMapServiceEnum service;
    public GetMapQueryParams withService(GetMapServiceEnum service) {
        this.service = service;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srs")
    public GetMapSrsEnum srs;
    public GetMapQueryParams withSrs(GetMapSrsEnum srs) {
        this.srs = srs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=styles")
    public GetMapStylesEnum styles;
    public GetMapQueryParams withStyles(GetMapStylesEnum styles) {
        this.styles = styles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public GetMapVersionEnum version;
    public GetMapQueryParams withVersion(GetMapVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public GetMapQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
}