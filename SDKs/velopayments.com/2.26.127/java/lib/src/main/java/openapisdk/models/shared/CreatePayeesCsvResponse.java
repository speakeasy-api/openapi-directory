package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePayeesCsvResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public String batchId;
    public CreatePayeesCsvResponse withBatchId(String batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectedCsvRows")
    public Object[] rejectedCsvRows;
    public CreatePayeesCsvResponse withRejectedCsvRows(Object[] rejectedCsvRows) {
        this.rejectedCsvRows = rejectedCsvRows;
        return this;
    }
}