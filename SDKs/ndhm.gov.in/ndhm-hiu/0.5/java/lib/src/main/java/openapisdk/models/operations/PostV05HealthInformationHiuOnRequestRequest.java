package openapisdk.models.operations;



public class PostV05HealthInformationHiuOnRequestRequest {
    public String serverURL;
    public PostV05HealthInformationHiuOnRequestRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05HealthInformationHiuOnRequestHeaders headers;
    public PostV05HealthInformationHiuOnRequestRequest withHeaders(PostV05HealthInformationHiuOnRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05HealthInformationHiuOnRequestRequests request;
    public PostV05HealthInformationHiuOnRequestRequest withRequest(PostV05HealthInformationHiuOnRequestRequests request) {
        this.request = request;
        return this;
    }
}