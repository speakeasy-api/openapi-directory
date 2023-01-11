package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadInput
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
public class GoogleCloudAssuredworkloadsV1WorkloadInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAccount")
    public String billingAccount;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withBillingAccount(String billingAccount) {
        this.billingAccount = billingAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceRegime")
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum complianceRegime;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withComplianceRegime(GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum complianceRegime) {
        this.complianceRegime = complianceRegime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceStatus")
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus complianceStatus;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withComplianceStatus(GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus complianceStatus) {
        this.complianceStatus = complianceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSovereignControls")
    public Boolean enableSovereignControls;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withEnableSovereignControls(Boolean enableSovereignControls) {
        this.enableSovereignControls = enableSovereignControls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsSettings")
    public GoogleCloudAssuredworkloadsV1WorkloadKmsSettings kmsSettings;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withKmsSettings(GoogleCloudAssuredworkloadsV1WorkloadKmsSettings kmsSettings) {
        this.kmsSettings = kmsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum partner;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withPartner(GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisionedResourcesParent")
    public String provisionedResourcesParent;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withProvisionedResourcesParent(String provisionedResourcesParent) {
        this.provisionedResourcesParent = provisionedResourcesParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceSettings")
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[] resourceSettings;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withResourceSettings(GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[] resourceSettings) {
        this.resourceSettings = resourceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saaEnrollmentResponse")
    public GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse saaEnrollmentResponse;
    public GoogleCloudAssuredworkloadsV1WorkloadInput withSaaEnrollmentResponse(GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse saaEnrollmentResponse) {
        this.saaEnrollmentResponse = saaEnrollmentResponse;
        return this;
    }
}