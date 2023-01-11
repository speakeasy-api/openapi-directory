package openapisdk.models.operations;



public class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse {
    public openapisdk.models.shared.BatchCreatePerfSamplesResponse batchCreatePerfSamplesResponse;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse withBatchCreatePerfSamplesResponse(openapisdk.models.shared.BatchCreatePerfSamplesResponse batchCreatePerfSamplesResponse) {
        this.batchCreatePerfSamplesResponse = batchCreatePerfSamplesResponse;
        return this;
    }
    public String contentType;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}