package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramFacets
 * Input only. Histogram facets to be specified in SearchJobsRequest.
**/
public class HistogramFacets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensationHistogramFacets")
    public CompensationHistogramRequest[] compensationHistogramFacets;
    public HistogramFacets withCompensationHistogramFacets(CompensationHistogramRequest[] compensationHistogramFacets) {
        this.compensationHistogramFacets = compensationHistogramFacets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributeHistogramFacets")
    public CustomAttributeHistogramRequest[] customAttributeHistogramFacets;
    public HistogramFacets withCustomAttributeHistogramFacets(CustomAttributeHistogramRequest[] customAttributeHistogramFacets) {
        this.customAttributeHistogramFacets = customAttributeHistogramFacets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleHistogramFacets")
    public HistogramFacetsSimpleHistogramFacetsEnum[] simpleHistogramFacets;
    public HistogramFacets withSimpleHistogramFacets(HistogramFacetsSimpleHistogramFacetsEnum[] simpleHistogramFacets) {
        this.simpleHistogramFacets = simpleHistogramFacets;
        return this;
    }
}