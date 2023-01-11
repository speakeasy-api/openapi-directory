package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberGeometryFilterExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geometryList")
    public String geometryList;
    public GetSearchVersionNumberGeometryFilterExtQueryParams withGeometryList(String geometryList) {
        this.geometryList = geometryList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=poiList")
    public String poiList;
    public GetSearchVersionNumberGeometryFilterExtQueryParams withPoiList(String poiList) {
        this.poiList = poiList;
        return this;
    }
}