package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudServicebrokerV1beta1Binding
 * Describes the binding.
**/
public class GoogleCloudServicebrokerV1beta1Binding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bind_resource")
    public java.util.Map<String, Object> bindResource;
    public GoogleCloudServicebrokerV1beta1Binding withBindResource(java.util.Map<String, Object> bindResource) {
        this.bindResource = bindResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binding_id")
    public String bindingId;
    public GoogleCloudServicebrokerV1beta1Binding withBindingId(String bindingId) {
        this.bindingId = bindingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudServicebrokerV1beta1Binding withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentName")
    public String deploymentName;
    public GoogleCloudServicebrokerV1beta1Binding withDeploymentName(String deploymentName) {
        this.deploymentName = deploymentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public GoogleCloudServicebrokerV1beta1Binding withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_id")
    public String planId;
    public GoogleCloudServicebrokerV1beta1Binding withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GoogleCloudServicebrokerV1beta1Binding withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_id")
    public String serviceId;
    public GoogleCloudServicebrokerV1beta1Binding withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}