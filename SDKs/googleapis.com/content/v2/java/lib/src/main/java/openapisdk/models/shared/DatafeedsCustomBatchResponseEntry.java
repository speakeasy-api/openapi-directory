package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedsCustomBatchResponseEntry
 * A batch entry encoding a single non-batch datafeeds response.
**/
public class DatafeedsCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public DatafeedsCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeed")
    public Datafeed datafeed;
    public DatafeedsCustomBatchResponseEntry withDatafeed(Datafeed datafeed) {
        this.datafeed = datafeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public DatafeedsCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
}