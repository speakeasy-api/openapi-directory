package openapisdk.models.operations;



public class GetClientProfileForPamResponse {
    public openapisdk.models.shared.ClientProfile clientProfile;
    public GetClientProfileForPamResponse withClientProfile(openapisdk.models.shared.ClientProfile clientProfile) {
        this.clientProfile = clientProfile;
        return this;
    }
    public String contentType;
    public GetClientProfileForPamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetClientProfileForPamResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetClientProfileForPamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}