package openapisdk.models.operations;



public class AddNewEmployeeToWebLinkResponse {
    public String contentType;
    public AddNewEmployeeToWebLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddNewEmployeeToWebLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddNewEmployeeToWebLinkResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.TrackingNumberResponse[] trackingNumberResponses;
    public AddNewEmployeeToWebLinkResponse withTrackingNumberResponses(openapisdk.models.shared.TrackingNumberResponse[] trackingNumberResponses) {
        this.trackingNumberResponses = trackingNumberResponses;
        return this;
    }
}