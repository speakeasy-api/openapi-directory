package openapisdk.models.operations;



public class DetectMultipartRequest {
    public DetectMultipartRequests request;
    public DetectMultipartRequest withRequest(DetectMultipartRequests request) {
        this.request = request;
        return this;
    }
    public DetectMultipartSecurity security;
    public DetectMultipartRequest withSecurity(DetectMultipartSecurity security) {
        this.security = security;
        return this;
    }
}