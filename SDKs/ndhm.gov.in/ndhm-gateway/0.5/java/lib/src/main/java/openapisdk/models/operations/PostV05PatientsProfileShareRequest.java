package openapisdk.models.operations;



public class PostV05PatientsProfileShareRequest {
    public String serverURL;
    public PostV05PatientsProfileShareRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05PatientsProfileShareHeaders headers;
    public PostV05PatientsProfileShareRequest withHeaders(PostV05PatientsProfileShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05PatientsProfileShareRequests request;
    public PostV05PatientsProfileShareRequest withRequest(PostV05PatientsProfileShareRequests request) {
        this.request = request;
        return this;
    }
}