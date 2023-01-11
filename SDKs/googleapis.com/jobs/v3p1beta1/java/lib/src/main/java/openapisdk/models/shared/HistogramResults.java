package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistogramResults
 * Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
**/
public class HistogramResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensationHistogramResults")
    public CompensationHistogramResult[] compensationHistogramResults;
    public HistogramResults withCompensationHistogramResults(CompensationHistogramResult[] compensationHistogramResults) {
        this.compensationHistogramResults = compensationHistogramResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributeHistogramResults")
    public CustomAttributeHistogramResult[] customAttributeHistogramResults;
    public HistogramResults withCustomAttributeHistogramResults(CustomAttributeHistogramResult[] customAttributeHistogramResults) {
        this.customAttributeHistogramResults = customAttributeHistogramResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simpleHistogramResults")
    public HistogramResult[] simpleHistogramResults;
    public HistogramResults withSimpleHistogramResults(HistogramResult[] simpleHistogramResults) {
        this.simpleHistogramResults = simpleHistogramResults;
        return this;
    }
}