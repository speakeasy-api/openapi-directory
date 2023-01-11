package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfBusinessTransactionClassificationResults200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public Double progress;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults[] results;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson withResults(GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}