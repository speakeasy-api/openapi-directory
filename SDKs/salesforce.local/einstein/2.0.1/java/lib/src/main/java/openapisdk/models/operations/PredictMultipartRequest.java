package openapisdk.models.operations;



public class PredictMultipartRequest {
    public PredictMultipartRequests request;
    public PredictMultipartRequest withRequest(PredictMultipartRequests request) {
        this.request = request;
        return this;
    }
    public PredictMultipartSecurity security;
    public PredictMultipartRequest withSecurity(PredictMultipartSecurity security) {
        this.security = security;
        return this;
    }
}