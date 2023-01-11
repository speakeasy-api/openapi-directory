package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews")
    public Double reviews;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating withReviews(Double reviews) {
        this.reviews = reviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating withValue(Double value) {
        this.value = value;
        return this;
    }
}