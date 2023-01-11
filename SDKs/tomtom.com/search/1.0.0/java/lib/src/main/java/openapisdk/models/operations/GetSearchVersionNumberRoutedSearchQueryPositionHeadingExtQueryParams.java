package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idxSet")
    public String idxSet;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withIdxSet(String idxSet) {
        this.idxSet = idxSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=multiplier")
    public Long multiplier;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withMultiplier(Long multiplier) {
        this.multiplier = multiplier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routingTimeout")
    public Long routingTimeout;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withRoutingTimeout(Long routingTimeout) {
        this.routingTimeout = routingTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=typeahead")
    public Boolean typeahead;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams withTypeahead(Boolean typeahead) {
        this.typeahead = typeahead;
        return this;
    }
}