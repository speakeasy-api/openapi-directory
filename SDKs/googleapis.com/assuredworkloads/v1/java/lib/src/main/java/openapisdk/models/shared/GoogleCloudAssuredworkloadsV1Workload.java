package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1Workload
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
public class GoogleCloudAssuredworkloadsV1Workload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAccount")
    public String billingAccount;
    public GoogleCloudAssuredworkloadsV1Workload withBillingAccount(String billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceRegime")
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum complianceRegime;
    public GoogleCloudAssuredworkloadsV1Workload withComplianceRegime(GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum complianceRegime) {
        this.complianceRegime = complianceRegime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceStatus")
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus complianceStatus;
    public GoogleCloudAssuredworkloadsV1Workload withComplianceStatus(GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus complianceStatus) {
        this.complianceStatus = complianceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compliantButDisallowedServices")
    public String[] compliantButDisallowedServices;
    public GoogleCloudAssuredworkloadsV1Workload withCompliantButDisallowedServices(String[] compliantButDisallowedServices) {
        this.compliantButDisallowedServices = compliantButDisallowedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudAssuredworkloadsV1Workload withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudAssuredworkloadsV1Workload withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSovereignControls")
    public Boolean enableSovereignControls;
    public GoogleCloudAssuredworkloadsV1Workload withEnableSovereignControls(Boolean enableSovereignControls) {
        this.enableSovereignControls = enableSovereignControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudAssuredworkloadsV1Workload withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kajEnrollmentState")
    public GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum kajEnrollmentState;
    public GoogleCloudAssuredworkloadsV1Workload withKajEnrollmentState(GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum kajEnrollmentState) {
        this.kajEnrollmentState = kajEnrollmentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsSettings")
    public GoogleCloudAssuredworkloadsV1WorkloadKmsSettings kmsSettings;
    public GoogleCloudAssuredworkloadsV1Workload withKmsSettings(GoogleCloudAssuredworkloadsV1WorkloadKmsSettings kmsSettings) {
        this.kmsSettings = kmsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudAssuredworkloadsV1Workload withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudAssuredworkloadsV1Workload withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum partner;
    public GoogleCloudAssuredworkloadsV1Workload withPartner(GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedResourcesParent")
    public String provisionedResourcesParent;
    public GoogleCloudAssuredworkloadsV1Workload withProvisionedResourcesParent(String provisionedResourcesParent) {
        this.provisionedResourcesParent = provisionedResourcesParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSettings")
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[] resourceSettings;
    public GoogleCloudAssuredworkloadsV1Workload withResourceSettings(GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[] resourceSettings) {
        this.resourceSettings = resourceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[] resources;
    public GoogleCloudAssuredworkloadsV1Workload withResources(GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saaEnrollmentResponse")
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse saaEnrollmentResponse;
    public GoogleCloudAssuredworkloadsV1Workload withSaaEnrollmentResponse(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse saaEnrollmentResponse) {
        this.saaEnrollmentResponse = saaEnrollmentResponse;
        return this;
    }
}