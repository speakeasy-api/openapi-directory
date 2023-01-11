package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudServicebrokerV1beta1ServiceInstance
 * Message describing inputs to Provision and Update Service instance requests.
**/
public class GoogleCloudServicebrokerV1beta1ServiceInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public java.util.Map<String, Object> context;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withContext(java.util.Map<String, Object> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentName")
    public String deploymentName;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withDeploymentName(String deploymentName) {
        this.deploymentName = deploymentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_id")
    public String instanceId;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_guid")
    public String organizationGuid;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withOrganizationGuid(String organizationGuid) {
        this.organizationGuid = organizationGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_id")
    public String planId;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_values")
    public java.util.Map<String, Object> previousValues;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withPreviousValues(java.util.Map<String, Object> previousValues) {
        this.previousValues = previousValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_id")
    public String serviceId;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("space_guid")
    public String spaceGuid;
    public GoogleCloudServicebrokerV1beta1ServiceInstance withSpaceGuid(String spaceGuid) {
        this.spaceGuid = spaceGuid;
        return this;
    }
}