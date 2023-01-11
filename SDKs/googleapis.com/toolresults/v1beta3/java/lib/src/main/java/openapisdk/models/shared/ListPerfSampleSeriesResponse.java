package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPerfSampleSeriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perfSampleSeries")
    public PerfSampleSeries[] perfSampleSeries;
    public ListPerfSampleSeriesResponse withPerfSampleSeries(PerfSampleSeries[] perfSampleSeries) {
        this.perfSampleSeries = perfSampleSeries;
        return this;
    }
}