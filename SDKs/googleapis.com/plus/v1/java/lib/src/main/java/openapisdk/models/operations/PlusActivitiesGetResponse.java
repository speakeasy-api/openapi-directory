package openapisdk.models.operations;



public class PlusActivitiesGetResponse {
    public openapisdk.models.shared.Activity activity;
    public PlusActivitiesGetResponse withActivity(openapisdk.models.shared.Activity activity) {
        this.activity = activity;
        return this;
    }
    public String contentType;
    public PlusActivitiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PlusActivitiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}