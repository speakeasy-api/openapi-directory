package openapisdk.models.operations;



public class TpuProjectsLocationsTensorflowVersionsListResponse {
    public String contentType;
    public TpuProjectsLocationsTensorflowVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTensorFlowVersionsResponse listTensorFlowVersionsResponse;
    public TpuProjectsLocationsTensorflowVersionsListResponse withListTensorFlowVersionsResponse(openapisdk.models.shared.ListTensorFlowVersionsResponse listTensorFlowVersionsResponse) {
        this.listTensorFlowVersionsResponse = listTensorFlowVersionsResponse;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsTensorflowVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}