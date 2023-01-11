package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberGeometrySearchQueryExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public GetSearchVersionNumberGeometrySearchQueryExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geometryList")
    public String geometryList;
    public GetSearchVersionNumberGeometrySearchQueryExtQueryParams withGeometryList(String geometryList) {
        this.geometryList = geometryList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idxSet")
    public String idxSet;
    public GetSearchVersionNumberGeometrySearchQueryExtQueryParams withIdxSet(String idxSet) {
        this.idxSet = idxSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberGeometrySearchQueryExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberGeometrySearchQueryExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}