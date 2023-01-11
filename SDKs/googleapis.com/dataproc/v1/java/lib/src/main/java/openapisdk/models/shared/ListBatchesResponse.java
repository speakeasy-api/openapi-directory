package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBatchesResponse
 * A list of batch workloads.
**/
public class ListBatchesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batches")
    public Batch[] batches;
    public ListBatchesResponse withBatches(Batch[] batches) {
        this.batches = batches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBatchesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}