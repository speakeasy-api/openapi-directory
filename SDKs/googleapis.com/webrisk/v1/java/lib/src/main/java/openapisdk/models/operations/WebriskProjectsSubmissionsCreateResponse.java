package openapisdk.models.operations;



public class WebriskProjectsSubmissionsCreateResponse {
    public String contentType;
    public WebriskProjectsSubmissionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudWebriskV1Submission googleCloudWebriskV1Submission;
    public WebriskProjectsSubmissionsCreateResponse withGoogleCloudWebriskV1Submission(openapisdk.models.shared.GoogleCloudWebriskV1Submission googleCloudWebriskV1Submission) {
        this.googleCloudWebriskV1Submission = googleCloudWebriskV1Submission;
        return this;
    }
    public Long statusCode;
    public WebriskProjectsSubmissionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}