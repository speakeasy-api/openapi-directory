package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class FacetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public FacetsQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public FacetsQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facetFilters")
    public String facetFilters;
    public FacetsQueryParams withFacetFilters(String facetFilters) {
        this.facetFilters = facetFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchTerms")
    public String searchTerms;
    public FacetsQueryParams withSearchTerms(String searchTerms) {
        this.searchTerms = searchTerms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortKeys")
    public FacetsSortKeysEnum sortKeys;
    public FacetsQueryParams withSortKeys(FacetsSortKeysEnum sortKeys) {
        this.sortKeys = sortKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public FacetsSourceEnum source;
    public FacetsQueryParams withSource(FacetsSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatial")
    public String spatial;
    public FacetsQueryParams withSpatial(String spatial) {
        this.spatial = spatial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public FacetsQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public FacetsQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}