package openapisdk.models.operations;



public class GetEmployerJobsResponse {
    public String contentType;
    public GetEmployerJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerJobsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public byte[] getEmployerJobs200ApplicationJSONBinaryString;
    public GetEmployerJobsResponse withGetEmployerJobs200ApplicationJsonBinaryString(byte[] getEmployerJobs200ApplicationJSONBinaryString) {
        this.getEmployerJobs200ApplicationJSONBinaryString = getEmployerJobs200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public GetEmployerJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}