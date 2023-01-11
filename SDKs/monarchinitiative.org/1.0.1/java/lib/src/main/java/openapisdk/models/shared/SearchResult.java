package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("docs")
    public java.util.Map<String, Object>[] docs;
    public SearchResult withDocs(java.util.Map<String, Object>[] docs) {
        this.docs = docs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facet_counts")
    public java.util.Map<String, Object> facetCounts;
    public SearchResult withFacetCounts(java.util.Map<String, Object> facetCounts) {
        this.facetCounts = facetCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlighting")
    public java.util.Map<String, Object> highlighting;
    public SearchResult withHighlighting(java.util.Map<String, Object> highlighting) {
        this.highlighting = highlighting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFound")
    public Long numFound;
    public SearchResult withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
}