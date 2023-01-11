package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberGeometrySearchQueryExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public PostSearchVersionNumberGeometrySearchQueryExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idxSet")
    public String idxSet;
    public PostSearchVersionNumberGeometrySearchQueryExtQueryParams withIdxSet(String idxSet) {
        this.idxSet = idxSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public PostSearchVersionNumberGeometrySearchQueryExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PostSearchVersionNumberGeometrySearchQueryExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
}