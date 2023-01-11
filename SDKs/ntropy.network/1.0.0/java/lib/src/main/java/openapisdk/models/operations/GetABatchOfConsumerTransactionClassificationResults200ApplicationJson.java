package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfConsumerTransactionClassificationResults200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public Double progress;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults[] results;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson withResults(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}