package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatafeedstatusesCustomBatchResponseEntry
 * A batch entry encoding a single non-batch datafeedstatuses response.
**/
public class DatafeedstatusesCustomBatchResponseEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public DatafeedstatusesCustomBatchResponseEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datafeedStatus")
    public DatafeedStatus datafeedStatus;
    public DatafeedstatusesCustomBatchResponseEntry withDatafeedStatus(DatafeedStatus datafeedStatus) {
        this.datafeedStatus = datafeedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public DatafeedstatusesCustomBatchResponseEntry withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
}