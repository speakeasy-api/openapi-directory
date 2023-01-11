package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberAdditionalDataExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geometries")
    public String geometries;
    public GetSearchVersionNumberAdditionalDataExtQueryParams withGeometries(String geometries) {
        this.geometries = geometries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geometriesZoom")
    public Long geometriesZoom;
    public GetSearchVersionNumberAdditionalDataExtQueryParams withGeometriesZoom(Long geometriesZoom) {
        this.geometriesZoom = geometriesZoom;
        return this;
    }
}