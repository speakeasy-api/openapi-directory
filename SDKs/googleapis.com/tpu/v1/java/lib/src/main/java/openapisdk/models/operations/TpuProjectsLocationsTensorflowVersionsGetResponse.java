package openapisdk.models.operations;



public class TpuProjectsLocationsTensorflowVersionsGetResponse {
    public String contentType;
    public TpuProjectsLocationsTensorflowVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TpuProjectsLocationsTensorflowVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TensorFlowVersion tensorFlowVersion;
    public TpuProjectsLocationsTensorflowVersionsGetResponse withTensorFlowVersion(openapisdk.models.shared.TensorFlowVersion tensorFlowVersion) {
        this.tensorFlowVersion = tensorFlowVersion;
        return this;
    }
}