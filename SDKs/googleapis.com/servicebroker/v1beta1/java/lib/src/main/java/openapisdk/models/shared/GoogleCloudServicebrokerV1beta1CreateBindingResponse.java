package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1CreateBindingResponse
 * Response for the `CreateBinding()` method.
**/
public class GoogleCloudServicebrokerV1beta1CreateBindingResponse {
    public java.util.Map<String, Object> credentials;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withCredentials(java.util.Map<String, Object> credentials) {
        this.credentials = credentials;
        return this;
    }
    public String description;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String operation;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    public String routeServiceUrl;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withRouteServiceUrl(String routeServiceUrl) {
        this.routeServiceUrl = routeServiceUrl;
        return this;
    }
    public String syslogDrainUrl;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withSyslogDrainUrl(String syslogDrainUrl) {
        this.syslogDrainUrl = syslogDrainUrl;
        return this;
    }
    public java.util.Map<String, Object>[] volumeMounts;
    public GoogleCloudServicebrokerV1beta1CreateBindingResponse withVolumeMounts(java.util.Map<String, Object>[] volumeMounts) {
        this.volumeMounts = volumeMounts;
        return this;
    }
}