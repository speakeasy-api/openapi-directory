package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1GetBindingResponse
 * Response for the `GetBinding()` method.
**/
public class GoogleCloudServicebrokerV1beta1GetBindingResponse {
    public java.util.Map<String, Object> credentials;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withCredentials(java.util.Map<String, Object> credentials) {
        this.credentials = credentials;
        return this;
    }
    public String deploymentName;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withDeploymentName(String deploymentName) {
        this.deploymentName = deploymentName;
        return this;
    }
    public String description;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String resourceName;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    public String routeServiceUrl;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withRouteServiceUrl(String routeServiceUrl) {
        this.routeServiceUrl = routeServiceUrl;
        return this;
    }
    public String syslogDrainUrl;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withSyslogDrainUrl(String syslogDrainUrl) {
        this.syslogDrainUrl = syslogDrainUrl;
        return this;
    }
    public java.util.Map<String, Object>[] volumeMounts;
    public GoogleCloudServicebrokerV1beta1GetBindingResponse withVolumeMounts(java.util.Map<String, Object>[] volumeMounts) {
        this.volumeMounts = volumeMounts;
        return this;
    }
}