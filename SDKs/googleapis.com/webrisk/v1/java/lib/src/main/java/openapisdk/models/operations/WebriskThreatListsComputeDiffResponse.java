package openapisdk.models.operations;



public class WebriskThreatListsComputeDiffResponse {
    public String contentType;
    public WebriskThreatListsComputeDiffResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse googleCloudWebriskV1ComputeThreatListDiffResponse;
    public WebriskThreatListsComputeDiffResponse withGoogleCloudWebriskV1ComputeThreatListDiffResponse(openapisdk.models.shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse googleCloudWebriskV1ComputeThreatListDiffResponse) {
        this.googleCloudWebriskV1ComputeThreatListDiffResponse = googleCloudWebriskV1ComputeThreatListDiffResponse;
        return this;
    }
    public Long statusCode;
    public WebriskThreatListsComputeDiffResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}