package openapisdk.models.operations;



public class PostV05HealthInformationTransferRequest {
    public String serverURL;
    public PostV05HealthInformationTransferRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05HealthInformationTransferHeaders headers;
    public PostV05HealthInformationTransferRequest withHeaders(PostV05HealthInformationTransferHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05HealthInformationTransferRequests request;
    public PostV05HealthInformationTransferRequest withRequest(PostV05HealthInformationTransferRequests request) {
        this.request = request;
        return this;
    }
}