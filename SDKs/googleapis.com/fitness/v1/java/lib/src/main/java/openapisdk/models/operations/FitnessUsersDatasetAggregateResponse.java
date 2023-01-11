package openapisdk.models.operations;



public class FitnessUsersDatasetAggregateResponse {
    public openapisdk.models.shared.AggregateResponse aggregateResponse;
    public FitnessUsersDatasetAggregateResponse withAggregateResponse(openapisdk.models.shared.AggregateResponse aggregateResponse) {
        this.aggregateResponse = aggregateResponse;
        return this;
    }
    public String contentType;
    public FitnessUsersDatasetAggregateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FitnessUsersDatasetAggregateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}