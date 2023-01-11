package openapisdk.models.operations;



public class PhoneCodeGeoFeedbackLoopRequest {
    public PhoneCodeGeoFeedbackLoopPathParams pathParams;
    public PhoneCodeGeoFeedbackLoopRequest withPathParams(PhoneCodeGeoFeedbackLoopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneCodeGeoFeedbackLoopSecurity security;
    public PhoneCodeGeoFeedbackLoopRequest withSecurity(PhoneCodeGeoFeedbackLoopSecurity security) {
        this.security = security;
        return this;
    }
}