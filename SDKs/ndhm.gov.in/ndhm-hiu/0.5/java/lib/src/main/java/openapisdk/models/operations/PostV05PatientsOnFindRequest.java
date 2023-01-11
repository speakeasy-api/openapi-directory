package openapisdk.models.operations;



public class PostV05PatientsOnFindRequest {
    public String serverURL;
    public PostV05PatientsOnFindRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public PostV05PatientsOnFindHeaders headers;
    public PostV05PatientsOnFindRequest withHeaders(PostV05PatientsOnFindHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PostV05PatientsOnFindRequests request;
    public PostV05PatientsOnFindRequest withRequest(PostV05PatientsOnFindRequests request) {
        this.request = request;
        return this;
    }
}