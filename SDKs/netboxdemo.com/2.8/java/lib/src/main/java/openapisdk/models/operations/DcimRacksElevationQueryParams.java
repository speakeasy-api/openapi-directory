package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksElevationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude")
    public Long exclude;
    public DcimRacksElevationQueryParams withExclude(Long exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expand_devices")
    public Boolean expandDevices;
    public DcimRacksElevationQueryParams withExpandDevices(Boolean expandDevices) {
        this.expandDevices = expandDevices;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=face")
    public DcimRacksElevationFaceEnum face;
    public DcimRacksElevationQueryParams withFace(DcimRacksElevationFaceEnum face) {
        this.face = face;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_images")
    public Boolean includeImages;
    public DcimRacksElevationQueryParams withIncludeImages(Boolean includeImages) {
        this.includeImages = includeImages;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=legend_width")
    public Long legendWidth;
    public DcimRacksElevationQueryParams withLegendWidth(Long legendWidth) {
        this.legendWidth = legendWidth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public DcimRacksElevationQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=render")
    public DcimRacksElevationRenderEnum render;
    public DcimRacksElevationQueryParams withRender(DcimRacksElevationRenderEnum render) {
        this.render = render;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit_height")
    public Long unitHeight;
    public DcimRacksElevationQueryParams withUnitHeight(Long unitHeight) {
        this.unitHeight = unitHeight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit_width")
    public Long unitWidth;
    public DcimRacksElevationQueryParams withUnitWidth(Long unitWidth) {
        this.unitWidth = unitWidth;
        return this;
    }
}