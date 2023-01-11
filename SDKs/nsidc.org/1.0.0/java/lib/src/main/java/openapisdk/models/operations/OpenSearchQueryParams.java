package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class OpenSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Long count;
    public OpenSearchQueryParams withCount(Long count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public OpenSearchQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facetFilters")
    public String facetFilters;
    public OpenSearchQueryParams withFacetFilters(String facetFilters) {
        this.facetFilters = facetFilters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchTerms")
    public String searchTerms;
    public OpenSearchQueryParams withSearchTerms(String searchTerms) {
        this.searchTerms = searchTerms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortKeys")
    public OpenSearchSortKeysEnum sortKeys;
    public OpenSearchQueryParams withSortKeys(OpenSearchSortKeysEnum sortKeys) {
        this.sortKeys = sortKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public OpenSearchSourceEnum source;
    public OpenSearchQueryParams withSource(OpenSearchSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatial")
    public String spatial;
    public OpenSearchQueryParams withSpatial(String spatial) {
        this.spatial = spatial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public OpenSearchQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public OpenSearchQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}